import type {
	APIApplicationCommandAutocompleteResponse,
	APIApplicationCommandOptionChoice,
	APIChatInputApplicationCommandInteraction,
	APIInteractionResponseChannelMessageWithSource,
	APIInteractionResponseDeferredChannelMessageWithSource,
	APIInteractionResponseDeferredMessageUpdate,
	APIInteractionResponseUpdateMessage,
	APIMessageComponentInteraction,
	ApplicationCommandInteractionDataOptionString,
	ApplicationCommandInteractionDataOptionSubCommand
} from "../../node_modules/discord-api-types/v9";
import { InteractionType } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import { DecodedCustomID, log } from "../util/general";
import { loadJSON, encodeCustomID, getDocsURL } from "../util/general";
import EmbedBuilder from "../util/EmbedBuilder";
import ComponentHelper from "../util/ComponentHelper";
import type { Request, Response } from "express";
import { Strings } from "@uwu-codes/utils";
import FuzzySearch from "fuzzy-search";
import { MessageFlags, ButtonStyle, InteractionResponseType } from "discord-api-types/v9";
import { APIApplicationCommandAutocompleteInteraction } from "../../node_modules/discord-api-types/payloads/v9/_interactions/autocomplete";

export function truncateChoices(values: Array<APIApplicationCommandOptionChoice>, max: number) {
	if (values.length < max) return values;
	else return [
		...values.slice(0, max - 1),
		{
			name: `(And ${values.length - (max - 1)} More)`,
			value: "more_count"
		}
	];
}

export function handleIssue(json: "invalid" | "low" | "loading" | `invalid_${"class" | "event" | "property" | "method"}`, ver: string, req: Request<never, never>, res: Response, autocomplete: boolean, className: string | null, otherName: string | null): void {
	switch (json) {
		case "invalid": return void res.status(200).json(autocomplete ? {
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: `Invalid Version "${ver}"`,
						value: "version_invalid"
					}
				]
			}
		} : {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `Invalid Version "${ver}"`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "low": return void res.status(200).json(autocomplete ? {
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: `The version "${ver}" is too low, the lowest we support is 0.14.0"`,
						value: "version_low"
					}
				]
			}
		} : {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The version "${ver}" is too low, the lowest we support is 0.14.0"`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "loading": return void res.status(200).json(autocomplete ? {
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: `The version "${ver}" is still loading.`,
						value: "version_loading"
					}
				]
			}
		} : {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The version "${ver}" is still loading.`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "invalid_class": return void res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The class "${className}" is invalid.`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "invalid_event": return void res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The event "${className || "unknown"}#event:${otherName || "unknown"}" is invalid."`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "invalid_property": return void res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The property "${className || "unknown"}#${otherName || "unknown"}" is invalid."`,
				flags: MessageFlags.Ephemeral
			}
		});
		case "invalid_method": return void res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `The method "${className || "unknown"}#${otherName || "unknown"}()" is invalid."`,
				flags: MessageFlags.Ephemeral
			}
		});
	}
}

// values to look out for later:
// version_invalid version_low version_loading
// invalid_class
// more_count
// no_events
// no_properties
// no_methods
export default new Command("docs", "Get information about Eris' classes and functions.")
	// class
	.addSubCommandOption("class", "Get info about a specific class.")
	.addAutocompleteOption("class", "The class to get information about.", true)
	.backToParent()
	// event
	.addSubCommandOption("event", "Get info about an event.")
	.addAutocompleteOption("class", "The class to get event information from.", true)
	.addAutocompleteOption("event", "The event to get information about.", true)
	.backToParent()
	// property
	.addSubCommandOption("property", "Get info about a class property.")
	.addAutocompleteOption("class", "The class to get property information from.", true)
	.addAutocompleteOption("property", "The property to get information about.", true)
	.backToParent()
	// method
	.addSubCommandOption("method", "Get info about a class method.")
	.addAutocompleteOption("class", "The class to get method information from.", true)
	.addAutocompleteOption("method", "The method to get information about.", true)
	.backToParent()
	.setExecutor(async function(interaction, req, res) {
		log(interaction, "docs", "command");
		const options = interaction.data.options as [Omit<ApplicationCommandInteractionDataOptionSubCommand, "options"> & { options: [className: ApplicationCommandInteractionDataOptionString, other?: ApplicationCommandInteractionDataOptionString]; }];
		const sub = options[0].name as "class" | "event" | "property" | "method";
		const subOptions = options[0].options;
		// constants will be handled separately
		const className = subOptions[0].value as Exclude<keyof Exclude<typeof json, null>, "Constants">;
		console.log(subOptions)
		const otherName = subOptions[1]?.value || null;
		const [json, ver] = await loadJSON();
		if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);

		switch (sub) {
			// @ts-expect-error types not mixing well
			case "class": return classRunner.call(this, interaction, req, res, className, otherName);
			// @ts-expect-error types not mixing well
			case "event": return eventRunner.call(this, interaction, req, res, className, otherName, null);
			// @ts-expect-error types not mixing well
			case "property": return propertyRunner.call(this, interaction, req, res, className, otherName, null);
			// @ts-expect-error types not mixing well
			case "method": return methodRunner.call(this, interaction, req, res, className, otherName, null);
		}
	})
	.setAutocompleteExecutor(async function(interaction, req, res) {
		log(interaction, "docs", "autocomplete");
		return handleAutoComplete.call(this, interaction, req, res);
	})
	.setComponentExecutor(async function(interaction, data, req, res) {
		log(interaction, "docs", "component");
		if (data.action === "prev") data.currentPage--;
		else if (data.action === "next") data.currentPage++;
		switch (data.section) {
			// @ts-expect-error types not mixing well
			case "class": return classRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data);
			// @ts-expect-error types not mixing well
			case "event": return eventRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data);
			// @ts-expect-error types not mixing well
			case "property": return propertyRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data);
			// @ts-expect-error types not mixing well
			case "method": return methodRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data);
		}
	});

export async function handleAutoComplete(this: Command, interaction: APIApplicationCommandAutocompleteInteraction, req: Request<never, never, APIApplicationCommandAutocompleteInteraction>, res: Response<APIApplicationCommandAutocompleteResponse>, version?: string) {
	if (!interaction.data) return res.status(400).end();
	if (!interaction.data.options) return res.status(400).end();
	const options = interaction.data.options as [Omit<ApplicationCommandInteractionDataOptionSubCommand, "options"> & { options: [className: ApplicationCommandInteractionDataOptionString, other?: ApplicationCommandInteractionDataOptionString]; }];
	const sub = options[0].name as "class" | "event" | "property" | "method";
	const subOptions = options[0].options;
	const [json, ver] = await loadJSON(version);
	if (typeof json !== "object") return handleIssue(json, ver, req, res, true, null, null);

	const classNames = Object.keys(json);
	let searchWith = [...classNames];
	switch (sub) {
		case "event": {
			searchWith = searchWith.filter(s => json[s].events.length > 0);
			break;
		}

		case "property": {
			searchWith = searchWith.filter(s => json[s].properties.length > 0);
			break;
		}

		case "method": {
			searchWith = searchWith.filter(s => json[s].methods.length > 0);
			break;
		}
	}
	if (subOptions[0].focused === true && subOptions[0].value === "") {
		return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: truncateChoices((sub === "class" ? classNames : searchWith).map(v => ({ name: v, value: v })), 25)
			}
		});
	}

	// class
	if (subOptions[0].focused === true || sub === "class") {

		const fuzzy = new FuzzySearch(searchWith, undefined, {
			sort: true
		});

		return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: truncateChoices(fuzzy.search(subOptions[0]!.value).map(v => ({ name: v, value: v })), 25)
			}
		});
	}

	// property
	if (subOptions[1]?.focused === true) {
		const c = json[subOptions[0].value ];
		if (subOptions[0].value === "more_count") return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: "You know that isn't a valid option, what are you playing at here?",
						value: "invalid_class"
					}
				]
			}
		});
		if (c === undefined) return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: "You broke something, what funny business are you up to?",
						value: "invalid_class"
					}
				]
			}
		});
		let choices: Array<APIApplicationCommandOptionChoice>;
		switch (sub) {
			case "event": {
				if (!c.events.length) return res.status(200).json({
					type: InteractionResponseType.ApplicationCommandAutocompleteResult,
					data: {
						choices: [
							{
								name: "(None)",
								value: "no_events"
							}
						]
					}
				});
				if (subOptions[1]) {
					const fuzzy = new FuzzySearch(c.events, ["name"], {
						sort: true
					});
					c.events = fuzzy.search(subOptions[1].value);
				}
				choices = truncateChoices(c.events.map(e => {
					const p: string = e.params.map(pr => `${pr.nullable ? "?" : ""}${pr.name}${pr.optional ? "?" : ""}`).join(", ");
					return {
						name: `${subOptions[0].value} -> ${e.name}(${p})`,
						value: e.name
					};
				}), 25);
				break;
			}

			case "property": {
				if (!c.properties.length) return res.status(200).json({
					type: InteractionResponseType.ApplicationCommandAutocompleteResult,
					data: {
						choices: [
							{
								name: "(None)",
								value: "no_properties"
							}
						]
					}
				});
				if (subOptions[1]) {
					// @ts-expect-error I hate ts
					const fuzzy = new FuzzySearch(c.properties, "name", {
						sort: true
					});
					c.properties = fuzzy.search(subOptions[1].value);
				}
				choices = truncateChoices(c.properties.map(p => ({
					name: `${subOptions[0].value} -> ${p.nullable ? "?" : ""}${p.name}${p.optional ? "?" : ""}`,
					value: p.name
				})), 25);
				break;
			}

			case "method": {
				if (!("methods" in c) || !c.methods?.length) return res.status(200).json({
					type: InteractionResponseType.ApplicationCommandAutocompleteResult,
					data: {
						choices: [
							{
								name: "(None)",
								value: "no_methods"
							}
						]
					}
				});
				if (subOptions[1]) {
					// @ts-expect-error I hate ts
					const fuzzy = new FuzzySearch(c.methods, "name", {
						sort: true
					});
					c.methods = fuzzy.search(subOptions[1].value);
				}
				choices = truncateChoices(c.methods.map(m => {
					const p: string = m.params.map(pr => `${pr.nullable ? "?" : ""}${pr.name}${pr.optional ? "?" : ""}`).join(", ");
					return {
						name: `${subOptions[0].value} -> ${m.name}(${p})`,
						value: m.name
					};
				}), 25);
				break;
			}
		}

		return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices
			}
		});
	}	
}
export async function classRunner(
	this: Command,
	interaction: (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction),
	req: Request<never, never, (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction)>,
	res: Response<(APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource) | (APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate)>,
	className: string,
	otherName: string | null,
	page = 1,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	decoded?: DecodedCustomID,
	cmd?: string,
	version?: string
) {
	const [json, ver] = await loadJSON(decoded?.version || version || undefined);
	if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);
	const keys = Object.keys(json);
	if(decoded && (decoded.action === "prev_class" || decoded.action === "next_class")) {
		let index = keys.findIndex(k => className === k) + 1;
		if(decoded.action === "prev_class") index--;
		else if(decoded.action === "next_class") index++;
		if(index < 1) index = keys.length;
		if(index > keys.length) index = 1;
		className = keys[index - 1];
		page = 1;
	}

	const c = json[className];
	if(!c) return handleIssue("invalid_class", ver, req, res, false, className, null);
	const index = keys.findIndex(k => className === k);
	const com = new ComponentHelper();
	const e = new EmbedBuilder()
		.setTitle(`${c.name} @ ${ver}`)
		.setURL(getDocsURL(ver, c.name))
		.setDescription(c.description)
		.setColor(0x5097D8);
	let components = false, pages = 0;
	if (c.events && c.events.length) {
		const events = c.events.map(ev => `[${ev.name}](${getDocsURL(ver, c.name, "event", ev.name)})`);
		const onPage = events.slice((page - 1) * 5, page * 5);
		if (onPage.length > 0) {
			e.addField(`${Strings.plural("Event", events.length)} (${events.length})`, onPage.join("\n"), true);
			if (events.length > 5) {
				components = true;
				pages = Math.ceil(events.length / 5);
			}
		}
	}
	if (c.properties && c.properties.length) {
		const props = c.properties.map(p => `[${p.nullable ? "?" : ""}${p.name}${p.optional ? "?" : ""}](${getDocsURL(ver, c.name, "property", p.name)})`);
		const onPage = props.slice((page - 1) * 5, page * 5);
		if (onPage.length > 0) {
			e.addField(`${props.length === 1 ? "Property" : "Properties"} (${props.length})`, onPage.join("\n"), true);
			if (props.length > 5) {
				components = true;
				const v = Math.ceil(props.length / 5);
				if (v > pages) pages = v;
			}
		}
	}
	if (c.methods && c.methods.length) {
		const methods = c.methods.map(m => `[${m.name}](${getDocsURL(ver, c.name, "method", m.name)})`);
		const onPage = methods.slice((page - 1) * 5, page * 5);
		if (onPage.length > 0) {
			e.addField(`${Strings.plural("Method", methods.length)} (${methods.length})`, onPage.join("\n"), true);
			if (methods.length > 5) {
				components = true;
				const v = Math.ceil(methods.length / 5);
				if (v > pages) pages = v;
			}
		}
	}
	if(c.constructor.params.length > 1 && c.constructor.description) e.addField("Constructor", Strings.truncate(`${c.constructor.description}\n\n${c.constructor.params.map(p => `\`${p.name}\` - ${p.type}${p.nullable ? " - Nullable" : ""}${p.optional ? " - Optional" : ""}\n${p.description}\n`).join("\n")}`, 1000), false)
	e.setFooter(`Class ${index + 1}/${keys.length}`);
	com.addInteractionButton(ButtonStyle.Primary, encodeCustomID("class", "prev_class", c.name, null, ver, page, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u25c0\ufe0f"), "Class");
	if (components) {
		com
			.addInteractionButton(ButtonStyle.Primary, encodeCustomID("class", "prev", c.name, null, ver, page, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u2b05\ufe0f"), "Page")
			.addInteractionButton(ButtonStyle.Primary, encodeCustomID("class", "next", c.name, null, ver, page, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u27a1\ufe0f"), "Page");
		e.setFooter(`Class ${index + 1}/${keys.length} | Page ${page}/${pages}`);
	}
	com.addInteractionButton(ButtonStyle.Primary, encodeCustomID("class", "next_class", c.name, null, ver, page, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u25b6\ufe0f"), "Class")

	if (interaction.type === InteractionType.ApplicationCommand) return res.status(200).json({
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			embeds: [
				e.toJSON()
			],
			components: com.toJSON()
		}
	});
	else {
		return res.status(200).json({
			type: InteractionResponseType.UpdateMessage,
			data: {
				embeds: [
					e.toJSON()
				],
				components: com.toJSON()
			}
		});
	}
}

export async function eventRunner(
	this: Command,
	interaction: (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction),
	req: Request<never, never, (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction)>,
	res: Response<(APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource) | (APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate)>,
	className: string,
	otherName: string | null,
	page: number | null,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	decoded?: DecodedCustomID,
	cmd?: string,
	version?: string
) {
	const [json, ver] = await loadJSON(decoded?.version || version || undefined);
	if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);
	const events = json[className].events;
	let event = events.find(e => e.name === otherName);
	if(page !== null) {
		if(page < 1) page = events.length;
		if(page > events.length) page = 1;
		event = events[page - 1];
		otherName = event.name;
	}


	if(!event) return handleIssue("invalid_event", ver, req, res, false, className, otherName);
	const index = events.indexOf(event);

	const com = new ComponentHelper();
	const e = new EmbedBuilder()
		.setTitle(`${className}#event:${event.name} @ ${ver}`)
		.setURL(getDocsURL(ver, className))
		.setDescription(event.description)
		.addField("Parameters", Strings.truncate(event.params.map(p =>
				`\`${p.name}\` - ${p.type}${p.nullable ? " - Nullable" : ""}${p.optional ? " - Optional" : ""}\n${p.description}\n`,
			).join("\n") || "NONE", 1000))
		.setColor(0x5097D8);

		if(events.length > 1) {
			com
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("event", "prev", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u2b05\ufe0f"))
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("event", "next", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u27a1\ufe0f"));
			e.setFooter(`Event ${index + 1}/${events.length}`);
		}

	if (interaction.type === InteractionType.ApplicationCommand) return res.status(200).json({
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			embeds: [
				e.toJSON()
			],
			components: com.toJSON()
		}
	});
	else {
		return res.status(200).json({
			type: InteractionResponseType.UpdateMessage,
			data: {
				embeds: [
					e.toJSON()
				],
				components: com.toJSON()
			}
		});
	}
}

export async function propertyRunner(
	this: Command,
	interaction: (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction),
	req: Request<never, never, (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction)>,
	res: Response<(APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource) | (APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate)>,
	className: string,
	otherName: string | null,
	page: number | null,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	decoded?: DecodedCustomID,
	cmd?: string,
	version?: string
) {
	const [json, ver] = await loadJSON(decoded?.version || version || undefined);
	if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);
	const properties = json[className].properties;
	let property = properties.find(e => e.name === otherName);
	if(page !== null) {
		if(page < 1) page = properties.length;
		if(page > properties.length) page = 1;
		property = properties[page - 1];
		otherName = property.name;
	}


	if(!property) return handleIssue("invalid_property", ver, req, res, false, className, otherName);
	const index = properties.indexOf(property);

	const com = new ComponentHelper();
	const e = new EmbedBuilder()
		.setTitle(`${className}#${property.name} @ ${ver}`)
		.setURL(getDocsURL(ver, className))
		.setDescription(Strings.truncate(`\`${property.type}\`${property.nullable ? " - Nullable" : ""}${property.optional ? " - Optional" : ""}\n${property.description}`, 1000))
		.setColor(0x5097D8);

		if(properties.length > 1) {
			com
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("property", "prev", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u2b05\ufe0f"))
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("property", "next", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u27a1\ufe0f"));
			e.setFooter(`Property ${index + 1}/${properties.length}`);
		}

	if (interaction.type === InteractionType.ApplicationCommand) return res.status(200).json({
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			embeds: [
				e.toJSON()
			],
			components: com.toJSON()
		}
	});
	else {
		return res.status(200).json({
			type: InteractionResponseType.UpdateMessage,
			data: {
				embeds: [
					e.toJSON()
				],
				components: com.toJSON()
			}
		});
	}
}

export async function methodRunner(
	this: Command,
	interaction: (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction),
	req: Request<never, never, (APIChatInputApplicationCommandInteraction) | (APIMessageComponentInteraction)>,
	res: Response<(APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource) | (APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate)>,
	className: string,
	otherName: string | null,
	page: number | null,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	decoded?: DecodedCustomID,
	cmd?: string,
	version?: string
) {
	const [json, ver] = await loadJSON(decoded?.version || version || undefined);
	if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);
	const methods = json[className].methods;
	let method = methods.find(e => e.name === otherName);
	if(page !== null) {
		if(page < 1) page = methods.length;
		if(page > methods.length) page = 1;
		method = methods[page - 1];
		otherName = method.name;
	}


	if(!method) return handleIssue("invalid_method", ver, req, res, false, className, otherName);
	const index = methods.indexOf(method);

	const com = new ComponentHelper();
	const e = new EmbedBuilder()
		.setTitle(`${className}#${method.name}() @ ${ver}`)
		.setURL(getDocsURL(ver, className))
		.setDescription(method.description)
		.addField("Parameters", Strings.truncate(method.params.map(p =>
				`\`${p.name}\` - ${p.type}${p.nullable ? " - Nullable" : ""}${p.optional ? " - Optional" : ""}\n${p.description}\n`,
			).join("\n") || "NONE", 1000))
		.setColor(0x5097D8);

		if(methods.length > 1) {
			com
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("method", "prev", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u2b05\ufe0f"))
				.addInteractionButton(ButtonStyle.Primary, encodeCustomID("method", "next", className, otherName, ver, index + 1, (interaction.user || interaction.member?.user)!.id, cmd || "docs"), false, ComponentHelper.emojiToPartial("\u27a1\ufe0f"));
			e.setFooter(`Method ${index + 1}/${methods.length}`);
		}

	if (interaction.type === InteractionType.ApplicationCommand) return res.status(200).json({
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			embeds: [
				e.toJSON()
			],
			components: com.toJSON()
		}
	});
	else {
		return res.status(200).json({
			type: InteractionResponseType.UpdateMessage,
			data: {
				embeds: [
					e.toJSON()
				],
				components: com.toJSON()
			}
		});
	}
}
