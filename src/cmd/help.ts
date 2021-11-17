import { InteractionResponseType, MessageFlags } from "../../node_modules/discord-api-types/v9";
import Command from "../util/Command";
import EmbedBuilder from "../util/EmbedBuilder";
import { defaultVersion, minVersionString } from "../util/general";

export default new Command("help", "Learn how to use me.")
	.setExecutor(async function(interaction, req, res) {
		return res.status(200).json({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				embeds: [
					new EmbedBuilder()
					.setTitle("Help")
					.setDescription([
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
						"Method: `/vdocs method <version> <class> <method>`",
					])
					.toJSON()
				],
				flags: MessageFlags.Ephemeral
			}
		})
	});
