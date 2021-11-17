import { ApplicationCommandInteractionDataOptionString, ApplicationCommandInteractionDataOptionSubCommand, InteractionResponseType, MessageFlags } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import { loadJSON, log, versions } from "../util/general";
import { classRunner, eventRunner, handleAutoComplete, handleIssue, methodRunner, propertyRunner } from "./docs";

export default new Command("vdocs", "(version specific) Get information about Eris' classes and functions.")
	// class
	.addSubCommandOption("class", "Get info about a specific class.")
	.addAutocompleteOption("version", "The version to get information from.", true)
	.addAutocompleteOption("class", "The class to get information about.", true)
	.backToParent()
	// event
	.addSubCommandOption("event", "Get info about an event.")
	.addAutocompleteOption("class", "The class to get event information from.", true)
	.addAutocompleteOption("version", "The version to get information from.", true)
	.addAutocompleteOption("event", "The event to get information about.", true)
	.backToParent()
	// property
	.addSubCommandOption("property", "Get info about a class property.")
	.addAutocompleteOption("class", "The class to get property information from.", true)
	.addAutocompleteOption("version", "The version to get information from.", true)
	.addAutocompleteOption("property", "The property to get information about.", true)
	.backToParent()
	// method
	.addSubCommandOption("method", "Get info about a class method.")
	.addAutocompleteOption("class", "The class to get method information from.", true)
	.addAutocompleteOption("version", "The version to get information from.", true)
	.addAutocompleteOption("method", "The method to get information about.", true)
	.backToParent()
	.setExecutor(async function(interaction, req, res) {
		log(interaction, "vdocs", "command");
		const options = interaction.data.options as [Omit<ApplicationCommandInteractionDataOptionSubCommand, "options"> & { options: [version: ApplicationCommandInteractionDataOptionString, className: ApplicationCommandInteractionDataOptionString, other?: ApplicationCommandInteractionDataOptionString]; }];
		const sub = options[0].name as "class" | "event" | "property" | "method";
		const subOptions = options[0].options;
		// constants will be handled separately
		const v = subOptions[0].value;
		const className = subOptions[1].value as Exclude<keyof Exclude<typeof json, null>, "Constants">;
		const otherName = subOptions[2]?.value || null;
		const [json, ver] = await loadJSON(v);
		if (typeof json !== "object") return handleIssue(json, ver, req, res, false, className, otherName);

		switch (sub) {
			// @ts-expect-error types not mixing well
			case "class": return classRunner.call(this, interaction, req, res, className, otherName, undefined, undefined, "vdocs", ver);
			// @ts-expect-error types not mixing well
			case "event": return eventRunner.call(this, interaction, req, res, className, otherName, null, undefined, "vdocs", ver);
			// @ts-expect-error types not mixing well
			case "property": return propertyRunner.call(this, interaction, req, res, className, otherName, null, undefined, "vdocs", ver);
			// @ts-expect-error types not mixing well
			case "method": return methodRunner.call(this, interaction, req, res, className, otherName, null, undefined, "vdocs", ver);
		}
	})
	.setAutocompleteExecutor(async function(interaction, req, res) {
		log(interaction, "vdocs", "autocomplete");
		const v = (interaction.data!.options![0] as ApplicationCommandInteractionDataOptionSubCommand).options.shift() as ApplicationCommandInteractionDataOptionString;
		if(v.focused) return res.status(200).json({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: versions.map(v => ({
					name: v,
					value: v
				}))
			}
		})
		return handleAutoComplete.call(this, interaction, req, res, v.value);
	})
	.setComponentExecutor(async function(interaction, data, req, res) {
		log(interaction, "vdocs", "component");
		const user = (interaction.user || interaction.member?.user)!
		if(user.id !== data.userId) return res.status(200).json({
			// @ts-expect-error -- return expects something component related
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `This button is not for you, **${user.username}#${user.discriminator}**`,
				flags: MessageFlags.Ephemeral
			}
		});
		if (data.action === "prev") data.currentPage--;
		else if (data.action === "next") data.currentPage++;
		switch (data.section) {
			// @ts-expect-error types not mixing well
			case "class": return classRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data, undefined, "vdocs");
			// @ts-expect-error types not mixing well
			case "event": return eventRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data, undefined, "vdocs");
			// @ts-expect-error types not mixing well
			case "property": return propertyRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data, undefined, "vdocs");
			// @ts-expect-error types not mixing well
			case "method": return methodRunner.call(this, interaction, req, res, data.className, data.otherName, data.currentPage, data, undefined, "vdocs");
		}
	});
