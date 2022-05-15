import { InteractionResponseType, MessageFlags } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import { defaultVersion, log, minVersionString } from "../util/general";
import pkg from "../../package.json";
import EmbedBuilder from "../util/EmbedBuilder";

export default new Command("help", "Learn how to use me.")
	.setExecutor(async function (interaction, req, res) {
		log(interaction, "help", "command");
		return res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				embeds: [
					new EmbedBuilder()
						.setTitle("Help")
						.setDescription([
							"Want to use me in your server? Use [this](https://discord.com/api/oauth2/authorize?client_id=909676430143651900&scope=applications.commands) link.",
							`You can also find my code [here](https://github.com/DonovanDMC/ErisDocsBot). (Version: **${pkg.version}**)`,
							"",
							"You can use me via these commands:",
							"",
							`Default Version (\`${defaultVersion}\`)`,
							"Class: `/docs class <class>`",
							"Event: `/docs event <class> <event>`",
							"Property: `/docs property <class> <property>`",
							"Method: `/docs method <class> <method>`",
							"",
							`Specific Version (\`${minVersionString}\`+)`,
							"Class: `/vdocs class <version> <class>`",
							"Event: `/vdocs event <version> <class> <event>`",
							"Property: `/vdocs property <version> <class> <property>`",
							"Method: `/vdocs method <version> <class> <method>`"
						])
						.setFooter("Made By Donovan_DMC#3621", "https://i.furry.cool/DonMaidCrop.png")
						.toJSON()
				],
				flags: MessageFlags.Ephemeral
			}
		});
	});
