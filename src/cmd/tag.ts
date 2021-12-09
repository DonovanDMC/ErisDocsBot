import type { ApplicationCommandInteractionDataOptionString } from "../../node_modules/discord-api-types/v9";
import { InteractionResponseType } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import { log } from "../util/general";
import EmbedBuilder from "../util/EmbedBuilder";

export default new Command("tag", "Get the content of a specific tag.")
	.addStringOption("tag", "The tag to get the content of.", [
		{
			name: "Version",
			value: "version"
		}
	], true)
	.setExecutor(async function (interaction, req, res) {
		log(interaction, "tag", "command");
		const tag = (interaction.data.options?.[0] as ApplicationCommandInteractionDataOptionString | undefined)?.value;
		if (!tag) return;

		switch (tag.toLowerCase()) {
			case "version": return res.status(200).json({
				type: InteractionResponseType.ChannelMessageWithSource,
				data: {
					embeds: [
						new EmbedBuilder()
							.setTitle("Giving Version Information")
							.setDescription([
								"If you are asked to provide information about what version of Eris you are using, please do not say \"latest\", \"github\", \"dev\", or anything similar.",
								"",
								"This is essentially meaningless to us as we do not know what you are considering the latest, you could be running an outdated version for all we know."
							])
							.setColor(0x4E98D8)
							.toJSON(),
						new EmbedBuilder()
							.setTitle("Installed From NPM")
							.setDescription([
								"Run the command `npm ls eris` in your project, and give us the number after the \"@\".",
								"For example, the version in this screenshot is **0.16.1**, on the third line."
							])
							.setImage("https://eris.owo-whats-this.dev/eris_version_0161.png")
							.setColor(0x4E98D8)
							.toJSON(),
						new EmbedBuilder()
							.setTitle("Installed From Github")
							.setDescription([
								"Run the command `npm ls eris` in your project, and give us the commit hash after the \"#\".",
								"For example, the commit hash in this screenshot is **29a3a635a241a4ab8725c25afa839f29542e1731**, version **0.16.2-dev** (the version number is mostly irrelevant).",
								"",
								"If you've installed from a fork ([for instance](https://github.com/DonovanDMC/Eris)) the process above still applies, but make sure to tell us what fork you are using."
							])
							.setImage("https://eris.owo-whats-this.dev/eris_version_dev.png")
							.setColor(0x4E98D8)
							.toJSON()
					]
				}
			});
		}
	});
