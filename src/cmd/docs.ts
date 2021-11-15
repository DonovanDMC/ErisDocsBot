import type { APIApplicationCommandOptionChoice, ApplicationCommandInteractionDataOptionString, ApplicationCommandInteractionDataOptionSubCommand } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import loadJSON, { encodeCustomID } from "../util/getEris";
import EmbedBuilder from "../util/EmbedBuilder";
import ComponentHelper from "../util/ComponentHelper";
import { MessageFlags, ButtonStyle, InteractionResponseType } from "discord-api-types/v9";
import FuzzySearch from "fuzzy-search";
import { Strings } from "@uwu-codes/utils";

function truncateChoices(values: Array<APIApplicationCommandOptionChoice>, max: number) {
	if (values.length < max) return values;
	else return [
		...values.slice(0, max - 1),
		{
			name: `(And ${values.length - (max - 1)} More)`,
			value: "more_count"
		}
	];
}

// values to look out for later:
// invalid_version
// invalid_class
// more_count
// no_events
// no_properties
// no_methods
const docsURL = "https://abal.moe/Eris/docs";
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
		const options = interaction.data.options as [Omit<ApplicationCommandInteractionDataOptionSubCommand, "options"> & { options: [className: ApplicationCommandInteractionDataOptionString, other?: ApplicationCommandInteractionDataOptionString]; }];
		const sub = options[0].name as "class" | "event" | "property" | "method";
		const subOptions = options[0].options;
		// constants will be handled separately
		const className = subOptions[0].value as Exclude<keyof Exclude<typeof json, null>, "Constants">;
		const otherName = subOptions[1]?.value;
		const [json, ver] = await loadJSON();
		if (json === null) return res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `Invalid Version "${ver}"`,
				flags: MessageFlags.Ephemeral
			}
		});

		console.log(sub, className, otherName);
		const c = json[className];
		switch (sub) {
			case "class" : {
				// @ts-expect-error removing constants makes lower types much easier
				if (className === "Constants") {
					return;
				}
				const com = new ComponentHelper();
				const e = new EmbedBuilder()
					.setTitle(`${className} @ ${ver}`)
					.setURL(`${docsURL}/${ver}/${className}`)
					.setDescription(c.description)
					.setColor(0x5097D8);
				let components = false, pages = 0;
				if (c.events && c.events.length) {
					const events = c.events.map(ev => `[${ev.name}](${docsURL}/${ver}/${className}#event-${ev.name})`);
					e.addField(`${Strings.plural("Event", events.length)} (${events.length})`, events.length > 5 ? `${events.slice(0, 5).join("\n")}` : events.slice(0, 5).join("\n"), true);
					if (events.length > 5) {
						components = true;
						pages = Math.ceil(events.length / 5);
					}
				}
				if (c.props && c.props.length) {
					const props = c.props.map(p => `[${p.name}${p.type?.type === "NULLABLE" ? "?" : ""}](${docsURL}/${ver}/${className}#property-${p.name})`);
					e.addField(`${props.length === 1 ? "Property" : "Properties"} (${props.length})`, props.length > 5 ? `${props.slice(0, 5).join("\n")}` : props.slice(0, 5).join("\n"), true);
					if (props.length > 5) {
						components = true;
						const v = Math.ceil(props.length / 5);
						if (v > pages) pages = v;
					}
				}
				if (c.methods && c.methods.length) {
					const methods = c.methods.map(m => `[${m.name}](${docsURL}/${ver}/${className}#method-${m.name})`);
					e.addField(`${Strings.plural("Method", methods.length)} (${methods.length})`, methods.length > 5 ? `${methods.slice(0, 5).join("\n")}` : methods.slice(0, 5).join("\n"), true);
					if (methods.length > 5) {
						components = true;
						const v = Math.ceil(methods.length / 5);
						if (v > pages) pages = v;
					}
				}
				if (components) {

					com
						.addInteractionButton(ButtonStyle.Primary, encodeCustomID("prev", className, null, ver, 1, pages, (interaction.user || interaction.member?.user)!.id), true, ComponentHelper.emojiToPartial("\u2b05\ufe0f"))
						.addInteractionButton(ButtonStyle.Primary, encodeCustomID("next", className, null, ver, 1, pages, (interaction.user || interaction.member?.user)!.id), false, ComponentHelper.emojiToPartial("\u27a1\ufe0f"));
					e.setFooter(`Page 1/${pages}`);
				}
				return res.status(200).json({
					type: InteractionResponseType.ChannelMessageWithSource,
					data: {
						embeds: [
							e.toJSON()
						],
						components: com.toJSON()
					}
				});
				break;
			}
		}
		/* return res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `${sub}, ${className}, ${otherName || ""}`,
				flags: MessageFlags.Ephemeral
			}
		}); */
	})
	.setAutocompleteExecutor(async function(interaction, req, res) {
		if (!interaction.data) return res.status(400).end();
		if (!interaction.data.options) return res.status(400).end();
		const options = interaction.data.options as [Omit<ApplicationCommandInteractionDataOptionSubCommand, "options"> & { options: [className: ApplicationCommandInteractionDataOptionString, other?: ApplicationCommandInteractionDataOptionString]; }];
		const sub = options[0].name as "class" | "event" | "property" | "method";
		const subOptions = options[0].options;
		const [json, ver] = await loadJSON();
		if (json === null) return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: [
					{
						name: `Invalid Version "${ver}"`,
						value: "invalid_version"
					}
				]
			}
		});
		const classNames = Object.keys(json) as Array<keyof typeof json>;
		let searchWith = [...classNames];
		switch (sub) {
			case "event": {
				searchWith = searchWith.filter(s => {
					const v = json[s];
					return ("events" in v) && v.events && v.events.length > 0;
				});
				break;
			}

			case "property": {
				searchWith = searchWith.filter(s => {
					const v = json[s];
					return ("props" in v) && v.props && v.props.length > 0;
				});
				break;
			}

			case "method": {
				searchWith = searchWith.filter(s => {
					const v = json[s];
					return ("methods" in v) && v.methods && v.methods.length > 0;
				});
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
			const c = json[subOptions[0].value as keyof typeof json];
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
					if (!("events" in c) || !c.events?.length) return res.status(200).json({
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
						// @ts-expect-error I hate ts
						const fuzzy = new FuzzySearch(c.events, "name", {
							sort: true
						});
						c.events = fuzzy.search(subOptions[1].value);
					}
					choices = truncateChoices(c.events.map(e => {
						// @ts-expect-error shit ain't working
						// eslint-disable-next-line
						const p: string = (e!.params || [])!.filter(p => !p.name.includes(".")).map(v => `${v.name}${v.type?.type === "NULLABLE" ? "?" : ""}`).join(", ");
						return {
							name: `${subOptions[0].value} -> ${e.name}(${p})`,
							value: e.name
						};
					}), 25);
					break;
				}

				case "property": {
					if (!("props" in c) || !c.props?.length) return res.status(200).json({
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
						const fuzzy = new FuzzySearch(c.props, "name", {
							sort: true
						});
						c.props = fuzzy.search(subOptions[1].value);
					}
					choices = truncateChoices(c.props.map(p => ({
						name: `${subOptions[0].value} -> ${p.name}${p.type?.type === "NULLABLE" ? "?" : ""}`,
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
						// @ts-expect-error shit ain't working
						// eslint-disable-next-line
						const p: string = (m!.params || [])!.filter(p => !p.name.includes(".")).map(v => `${v.name}${v.optional ? "?" : ""}`).join(", ");
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
	});
