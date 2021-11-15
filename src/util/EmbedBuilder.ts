import type { APIEmbed, APIEmbedField } from "discord-api-types/v9";

export default class EmbedBuilder {
	private json: APIEmbed = {};

	setAuthor(name: string, icon_url?: string, url?: string) {
		this.json.author = {
			name,
			icon_url,
			url
		};

		return  this;
	}
	getAuthor() { return this.json.author; }
	removeAuthor() { this.json.author = undefined; return this; }

	setColor(color: number) {
		this.json.color = color;
		return this;
	}
	getColor() { return this.json.color; }
	removeColor() { this.json.color = undefined; return this; }

	setDescription(first: string | Array<string>, ...other: Array<(string | Array<string>)>) { this.json.description = [...(Array.isArray(first) ? first : [first]), ...(other.map(o => [...(Array.isArray(o) ? o : [o])].join("\n")))].join("\n"); return this; }
	getDescription() { return this.json.description; }
	removeDescription() { this.json.description = undefined; return this; }

	addField(name: string, value: string, inline?: boolean) { this.json.fields = [...(this.json.fields ?? []), { name, value, inline }]; return this; }
	addBlankField(inline?: boolean) { return this.addField("\u200b", "\u200b", inline); }
	getField(index: number) { return (this.json.fields ?? [])[index]; }
	addFields(...args: Array<APIEmbedField>) { args.forEach(arg => this.addField(arg.name, arg.value, arg.inline)); return this; }
	getFields() { return (this.json.fields ?? []); }

	setFooter(text: string, icon_url?: string) { this.json.footer = { text, icon_url }; return this; }
	getFooter() { return this.json.footer; }
	removeFooter() { this.json.footer = undefined; return this; }

	setImage(url: string) { this.json.image = { url }; return this; }
	getImage() { return this.json.image; }
	removeImage() { this.json.image = undefined; return this; }

	setThumbnail(url: string) { this.json.thumbnail = { url }; return this; }
	getThumbnail() { return this.json.thumbnail; }
	removeThumbnail() { this.json.thumbnail = undefined; return this; }

	setTimestamp(time: string | Date | "now") {
		if (time === "now") time = new Date().toISOString();
		if (time instanceof Date) time = time.toISOString();
		this.json.timestamp = time;
		return this;
	}
	getTimestamp() { return this.json.timestamp; }
	removeTimestamp() { this.json.timestamp = undefined; return this; }

	setTitle(title: string) { this.json.title = title; return this; }
	getTitle() { return this.json.title; }
	removeTitle() { this.json.title = undefined; return this; }

	setURL(url: string) { this.json.url = url; return this; }
	getURL() { return this.json.url; }
	removeURL() { this.json.url = undefined; return this; }

	toJSON(array: true): Array<APIEmbed>;
	toJSON(array?: false): APIEmbed;
	toJSON(array = false) { return array ? [this.json] : this.json; }
}
