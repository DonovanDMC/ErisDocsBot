import type { APIActionRowComponent, APIMessageComponent, APIMessageComponentEmoji, APISelectMenuOption } from "discord-api-types/v9";
import { ComponentType, ButtonStyle } from "discord-api-types/v9";

export default class ComponentHelper {
	private rows = [] as Array<APIActionRowComponent>;
	rowMax: 1 | 2 | 3 | 4 | 5;
	constructor(rowMax: ComponentHelper["rowMax"] = 5) { this.rowMax = rowMax; }
	addRow(type = ComponentType.ActionRow as const, components: Array<Exclude<APIMessageComponent, APIActionRowComponent>> = []) {
		this.rows.push({
			components,
			type
		});
		return this;
	}

	// https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
	// 1 = blurple
	// 2 = grey
	// 3 = green
	// 4 = red
	// 5 = url
	addInteractionButton(style: Exclude<ButtonStyle, ButtonStyle.Link>, custom_id: string, disabled?: boolean, emoji?: APIMessageComponentEmoji, label?: string) {
		//                                                             either up to 5 buttons or a select menu per row
		if (this.rows.length === 0 || this.rows[this.rows.length - 1].components.length >= this.rowMax || this.rows[this.rows.length - 1].components[0]?.type === ComponentType.SelectMenu) this.addRow();
		this.rows[this.rows.length - 1].components.push({
			type: ComponentType.Button,
			style,
			custom_id,
			disabled,
			emoji,
			label
		});
		return this;
	}

	addURLButton(url: string, disabled?: boolean, emoji?: APIMessageComponentEmoji, label?: string) {
		//                                                             either up to 5 buttons or a select menu per row
		if (this.rows.length === 0 || this.rows[this.rows.length - 1].components.length >= this.rowMax || this.rows[this.rows.length - 1].components[0]?.type === ComponentType.SelectMenu) this.addRow();
		this.rows[this.rows.length - 1].components.push({
			type: ComponentType.Button,
			style: ButtonStyle.Link,
			disabled,
			emoji,
			label,
			url
		});
		return this;
	}

	addSelectMenu(custom_id: string, options: Array<APISelectMenuOption>, placeholder?: string, min_values?: number, max_values?: number) {
		// select menus have to be on their own row
		this.addRow();
		this.rows[this.rows.length - 1].components.push({
			type: ComponentType.SelectMenu,
			options,
			placeholder,
			min_values,
			max_values,
			custom_id
		});
		return this;
	}

	removeEmptyRows() {
		this.rows.forEach((row, index) => {
			if (row.components.length === 0) this.rows.splice(index, 1);
		});

		return this;
	}

	toJSON() { return this.removeEmptyRows().rows; }

	static emojiToPartial(e: string, type: "default" | "custom" = "custom"): APIMessageComponentEmoji {
		if (type === "default") return {
			name: e,
			animated: false
		};
		else {
			const [, anim, name, id] = /^<?(a)?:(.*):([\d]{15,21})>?$/.exec(e) ?? [];
			if (!name || !id) return this.emojiToPartial(e, "default");
			return {
				id,
				name,
				animated: anim === "a"
			};
		}
	}
}
