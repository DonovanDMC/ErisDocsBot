
import type { DecodedCustomID } from "./general";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord-api-types/v9";
import type {
	APIApplicationCommandOption,
	APIApplicationCommandOptionChoice,
	APIApplicationCommandChannelOptions,
	APIInteractionResponseChannelMessageWithSource,
	APIInteractionResponseDeferredChannelMessageWithSource,
	APIChatInputApplicationCommandInteraction,
	APIApplicationCommandAutocompleteResponse,
	APIMessageComponentInteraction,
	APIInteractionResponseDeferredMessageUpdate,
	APIInteractionResponseUpdateMessage
} from "discord-api-types/v9";
import type { Request, Response } from "express";
import type { APIApplicationCommandAutocompleteInteraction } from "discord-api-types/payloads/v9/_interactions/autocomplete";

export default class Command {
	name: string;
	description: string;
	options: Array<APIApplicationCommandOption> = [];
	runCommand: (this: Command, interaction: APIChatInputApplicationCommandInteraction, req: Request<never, never, APIChatInputApplicationCommandInteraction>, res: Response<APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource>) => Promise<unknown>;
	runAutoComplete?: (this: Command, interaction: APIApplicationCommandAutocompleteInteraction, req: Request<never, never, APIApplicationCommandAutocompleteInteraction>, res: Response<APIApplicationCommandAutocompleteResponse>) => Promise<unknown>;
	runComponent?: (this: Command, interaction: APIMessageComponentInteraction, data: DecodedCustomID, req: Request<never, never, APIMessageComponentInteraction>, res: Response<APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate>) => Promise<unknown>;
	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}

	addSubCommandOption(name: string, description: string) {
		return new SubCommand(name, description, this);
	}

	addStringOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.String,
			name,
			description,
			choices,
			required
		});
		return this;
	}

	addIntegerOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, min_value?: number, max_value?: number, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Integer,
			name,
			description,
			choices,
			min_value,
			max_value,
			required
		});
		return this;
	}

	addBooleanOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Boolean,
			name,
			description,
			required
		});
		return this;
	}

	addUserOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.User,
			name,
			description,
			required
		});
		return this;
	}

	addChannelOption(name: string, description: string, channel_types: APIApplicationCommandChannelOptions["channel_types"], required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Channel,
			name,
			description,
			required,
			channel_types
		});
		return this;
	}

	addRoleOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Role,
			name,
			description,
			required
		});
		return this;
	}

	addMentionableOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Mentionable,
			name,
			description,
			required
		});
		return this;
	}

	addNumberOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, min_value?: number, max_value?: number, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Number,
			name,
			description,
			choices,
			min_value,
			max_value,
			required
		});
		return this;
	}

	addAutocompleteOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.String,
			name,
			description,
			required,
			autocomplete: true
		});
		return this;
	}

	setExecutor(exec: Command["runCommand"]) {
		this.runCommand = exec.bind(this);
		return this;
	}

	setAutocompleteExecutor(exec: Exclude<Command["runAutoComplete"], undefined>) {
		this.runAutoComplete = exec.bind(this);
		return this;
	}

	setComponentExecutor(exec: Exclude<Command["runComponent"], undefined>) {
		this.runComponent = exec.bind(this);
		return this;
	}

	toJSON() {
		return {
			type: ApplicationCommandType.ChatInput,
			name: this.name,
			description: this.description,
			options: this.options
		};
	}
}

class SubCommand {
	name: string;
	description: string;
	options: Array<APIApplicationCommandOption> = [];
	private cmd: Command;
	constructor(name: string, description: string, cmd: Command) {
		this.name = name;
		this.description = description;
		this.cmd = cmd;
	}

	addStringOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.String,
			name,
			description,
			choices,
			required
		});
		return this;
	}

	addIntegerOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, min_value?: number, max_value?: number, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Integer,
			name,
			description,
			choices,
			min_value,
			max_value,
			required
		});
		return this;
	}

	addBooleanOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Boolean,
			name,
			description,
			required
		});
		return this;
	}

	addUserOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.User,
			name,
			description,
			required
		});
		return this;
	}

	addChannelOption(name: string, description: string, channel_types: APIApplicationCommandChannelOptions["channel_types"], required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Channel,
			name,
			description,
			required,
			channel_types
		});
		return this;
	}

	addRoleOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Role,
			name,
			description,
			required
		});
		return this;
	}

	addMentionableOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Mentionable,
			name,
			description,
			required
		});
		return this;
	}

	addNumberOption(name: string, description: string, choices?: Array<APIApplicationCommandOptionChoice>, min_value?: number, max_value?: number, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.Number,
			name,
			description,
			choices,
			min_value,
			max_value,
			required
		});
		return this;
	}

	addAutocompleteOption(name: string, description: string, required = false) {
		this.options.push({
			type: ApplicationCommandOptionType.String,
			name,
			description,
			required,
			autocomplete: true
		});
		return this;
	}

	toJSON() {
		return {
			type: ApplicationCommandOptionType.Subcommand as const,
			name: this.name,
			description: this.description,
			options: this.options
		};
	}

	backToParent() {
		this.cmd.options.push(this.toJSON());
		return this.cmd;
	}
}
