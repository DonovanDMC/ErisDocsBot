declare namespace Eris0_16_0 {
	export interface Root {
		AutocompleteInteraction: AutocompleteInteraction;
		Bucket: Bucket;
		Call: Call;
		CategoryChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		Channel: ChannelOrInteractionOrUnavailableGuild;
		Client: Client;
		Collection: Collection;
		Command: Command;
		CommandClient: CommandClient;
		CommandInteraction: CommandInteraction;
		ComponentInteraction: ComponentInteraction;
		ExtendedUser: ExtendedUser;
		GroupChannel: GroupChannel;
		Guild: Guild;
		GuildAuditLogEntry: GuildAuditLogEntry;
		GuildChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		GuildIntegration: GuildIntegration;
		GuildPreview: GuildPreview;
		GuildTemplate: GuildTemplate;
		Interaction: ChannelOrInteractionOrUnavailableGuild;
		Invite: Invite;
		Member: Member;
		Message: Message;
		NewsChannel: NewsChannel;
		NewsThreadChannel: NewsThreadChannel;
		Permission: Permission;
		PermissionOverwrite: PermissionOverwrite;
		PingInteraction: PingInteraction;
		PrivateChannel: PrivateChannel;
		PrivateThreadChannel: PrivateThreadChannel;
		PublicThreadChannel: PublicThreadChannel;
		Relationship: RelationshipOrVoiceState;
		RequestHandler: RequestHandler;
		Role: Role;
		SequentialBucket: SequentialBucket;
		Shard: Shard;
		SharedStream: SharedStream;
		StageChannel: StageChannelOrVoiceChannel;
		StageInstance: StageInstance;
		StoreChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		TextChannel: TextChannel;
		ThreadChannel: ThreadChannel;
		ThreadMember: ThreadMember;
		UnavailableGuild: ChannelOrInteractionOrUnavailableGuild;
		UnknownInteraction: UnknownInteraction;
		User: User;
		VoiceChannel: StageChannelOrVoiceChannel;
		VoiceConnection: VoiceConnection;
		VoiceDataStream: VoiceDataStream;
		VoiceState: RelationshipOrVoiceState;
		Constants: Constants;
	}
	export interface AutocompleteInteraction {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity>;
	}
	export interface PropsEntity {
		description: string;
		name: string;
		type: Type;
	}
	export interface Type {
		type: string;
		name?: string;
		left?: LeftOrRightOrTypeOrObjectsEntity;
		right?: Right;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity;
		meta?: Meta;
	}
	export interface LeftOrRightOrTypeOrObjectsEntity {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta1;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue {
		type: string;
		name: string;
	}
	export interface Meta1 {
		syntax: string;
	}
	export interface Right {
		type: string;
		left: LeftOrRightOrTypeOrObjectsEntity1;
		right: LeftOrRightOrTypeOrObjectsEntity1;
	}
	export interface LeftOrRightOrTypeOrObjectsEntity1 {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta1;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1 {
		type: string;
		name: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2 {
		type: string;
		name: string;
	}
	export interface Meta2 {
		syntax: string;
	}
	export interface Meta {
		syntax: string;
	}
	export interface MethodsEntity {
		description: string;
		name: string;
		params?: Array<ParamsEntity>;
		returns: Returns;
	}
	export interface ParamsEntity {
		description: string;
		name: string;
		type: TypeOrRightOrObjectsEntity;
	}
	export interface TypeOrRightOrObjectsEntity {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue3;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta3;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue4;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue5;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue3 {
		type: string;
		name: string;
	}
	export interface Meta3 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue4 {
		type: string;
		name: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue5 {
		type: string;
		name: string;
	}
	export interface Returns {
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface Bucket {
		extends?: [];
		description: string;
		name: string;
		constructr: Constructr;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity1>;
	}
	export interface Constructr {
		description: string;
		name: string;
		params?: Array<ParamsEntity1>;
	}
	export interface ParamsEntity1 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		optional?: boolean;
	}
	export interface PropsEntityOrParamsEntity {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface MethodsEntity1 {
		description: string;
		name: string;
		params?: Array<ParamsEntity2>;
	}
	export interface ParamsEntity2 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		optional?: boolean;
		default?: boolean;
	}
	export interface Call {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity1>;
		events?: [];
		methods?: [];
	}
	export interface PropsEntityOrParamsEntity1 {
		description: string;
		name: string;
		type: Type1;
	}
	export interface Type1 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity1;
		meta?: Meta4;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue6;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity1 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Meta4 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue6 {
		type: string;
		name: string;
	}
	export interface CategoryChannelOrGuildChannelOrStoreChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity2>;
	}
	export interface PropsEntityOrParamsEntity2 {
		description: string;
		name: string;
		type: Type2;
	}
	export interface Type2 {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta5;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue6;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
	}
	export interface Meta5 {
		syntax: string;
	}
	export interface MethodsEntity2 {
		description: string;
		name: string;
		params?: Array<ParamsEntity3>;
		returns: Returns1;
	}
	export interface ParamsEntity3 {
		description: string;
		name: string;
		type: Type3;
		optional?: boolean;
	}
	export interface Type3 {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta1;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue7;
		right?: TypeOrRightOrObjectsEntity1;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue7 {
		type: string;
		name: string;
	}
	export interface TypeOrRightOrObjectsEntity1 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8 {
		type: string;
		name: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9 {
		type: string;
		name: string;
	}
	export interface Returns1 {
		type: Type4;
	}
	export interface Type4 {
		type: string;
		name?: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue10;
		objects?: Array<ObjectsEntity>;
		meta?: Meta6;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue10 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue11;
		right?: RightOrTypeOrValue;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue11 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrValue {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrType;
	}
	export interface RightOrType {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrType1;
	}
	export interface RightOrType1 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrObjectsEntityOrType;
	}
	export interface RightOrObjectsEntityOrType {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrRightOrObjectsEntity2;
	}
	export interface TypeOrRightOrObjectsEntity2 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrTypeOrObjectsEntityOrValue;
	}
	export interface RightOrTypeOrObjectsEntityOrValue {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface Meta6 {
		syntax: string;
	}
	export interface ChannelOrInteractionOrUnavailableGuild {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: [];
	}
	export interface Client {
		extends?: Array<string>;
		description: string;
		name: string;
		constructr: Constructr1;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: Array<EventsEntity>;
		methods?: Array<MethodsEntity3>;
	}
	export interface Constructr1 {
		description: string;
		name: string;
		params?: Array<ParamsEntity4>;
	}
	export interface ParamsEntity4 {
		description: string;
		name: string;
		type: Type5;
		optional?: boolean;
		default?: boolean | number | string;
	}
	export interface Type5 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue12;
		right?: ValueOrTypeOrRightOrLeftOrObjectsEntity2;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue12 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity2 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface EventsEntity {
		description: string;
		name: string;
		params?: Array<ParamsEntity5>;
	}
	export interface ParamsEntity5 {
		description: string;
		name: string;
		type: Type6;
		optional?: boolean;
	}
	export interface Type6 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity3;
		meta?: Meta7;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue13;
		objects?: Array<ObjectsEntityOrRight>;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity4;
		right?: Right1;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity3 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Meta7 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue13 {
		type: string;
		name: string;
	}
	export interface ObjectsEntityOrRight {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue14;
		right?: Right2;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue14 {
		type: string;
		name: string;
	}
	export interface Right2 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue15;
		right?: TypeOrRightOrObjectsEntity3;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue15 {
		type: string;
		name: string;
	}
	export interface TypeOrRightOrObjectsEntity3 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity4 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Right1 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue16;
		right?: Right3;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue17;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta8;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue16 {
		type: string;
		name: string;
	}
	export interface Right3 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue18;
		right?: ObjectsEntityOrRight1;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue18 {
		type: string;
		name: string;
	}
	export interface ObjectsEntityOrRight1 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue14;
		right?: Right2;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue17 {
		type: string;
		name: string;
	}
	export interface Meta8 {
		syntax: string;
	}
	export interface MethodsEntity3 {
		description: string;
		name: string;
		params?: Array<ParamsEntity6>;
		returns?: Returns2;
	}
	export interface ParamsEntity6 {
		description?: string;
		name: string;
		type: Type7;
		optional?: boolean;
		default?: number | string | number | boolean | boolean | number | boolean;
	}
	export interface Type7 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue19;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta9;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue20;
		right?: ObjectsEntityOrRight2;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue19 {
		type: string;
		name: string;
	}
	export interface Meta9 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue20 {
		type: string;
		name: string;
	}
	export interface ObjectsEntityOrRight2 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue21;
		right?: TypeOrRightOrObjectsEntity4;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue21 {
		type: string;
		name: string;
	}
	export interface TypeOrRightOrObjectsEntity4 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface Returns2 {
		type: Type8;
		description?: string;
	}
	export interface Type8 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue22;
		objects?: Array<ObjectsEntity1>;
		meta?: Meta10;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue23;
		right?: ObjectsEntityOrRight3;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue22 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity1 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta11;
		name?: string;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity5;
		right?: Right4;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue24;
		entries?: Array<EntriesEntity>;
	}
	export interface Meta11 {
		syntax: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity5 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Right4 {
		type: string;
		name?: string;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity6;
		right?: Right5;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity6 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Right5 {
		type: string;
		name?: string;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity7;
		right?: Right6;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity7 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Right6 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue25;
		right?: Right7;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue26;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta12;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue25 {
		type: string;
		name: string;
	}
	export interface Right7 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrObjectsEntity;
	}
	export interface RightOrObjectsEntity {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: Right8;
	}
	export interface Right8 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrRightOrObjectsEntity5;
	}
	export interface TypeOrRightOrObjectsEntity5 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue26 {
		type: string;
		name: string;
	}
	export interface Meta12 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue24 {
		type: string;
		name: string;
	}
	export interface EntriesEntity {
		type: string;
		key: string;
		quoteStyle: string;
		value: Value;
		readonly: boolean;
	}
	export interface Value {
		type: string;
		subject: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		objects?: Array<TypeOrRightOrObjectsEntity6>;
		meta: Meta13;
	}
	export interface TypeOrRightOrObjectsEntity6 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue27;
		right?: RightOrTypeOrObjectsEntityOrValue1;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue27 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntityOrValue1 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface Meta13 {
		syntax: string;
	}
	export interface Meta10 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue23 {
		type: string;
		name: string;
	}
	export interface ObjectsEntityOrRight3 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrTypeOrValue1;
	}
	export interface RightOrTypeOrValue1 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrType;
	}
	export interface Collection {
		extends?: Array<string>;
		description: string;
		name: string;
		constructr: Constructr;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity4>;
	}
	export interface ParamsEntityOrPropsEntity {
		description: string;
		name: string;
		type: LeftOrRightOrTypeOrObjectsEntity1;
	}
	export interface MethodsEntity4 {
		description: string;
		name: string;
		params?: Array<ParamsEntity7>;
		returns: Returns3;
	}
	export interface ParamsEntity7 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		optional?: boolean;
	}
	export interface Returns3 {
		description: string;
		type: Type2;
	}
	export interface Command {
		extends?: [];
		description: string;
		name: string;
		constructr: Constructr2;
		props?: Array<PropsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity5>;
	}
	export interface Constructr2 {
		description: string;
		name: string;
		params?: Array<ParamsEntity8>;
	}
	export interface ParamsEntity8 {
		description: string;
		name: string;
		type: Type9;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Type9 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue28;
		right?: Right9;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue29;
		objects?: Array<ObjectsEntity2>;
		meta?: Meta14;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue28 {
		type: string;
		name: string;
	}
	export interface Right9 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue30;
		right?: RightOrType2;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue31;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta15;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue30 {
		type: string;
		name: string;
	}
	export interface RightOrType2 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue32;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue>;
		meta?: Meta16;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue32 {
		type: string;
		name: string;
	}
	export interface Meta16 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue31 {
		type: string;
		name: string;
	}
	export interface Meta15 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue29 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity2 {
		type: string;
		name?: string;
		entries?: Array<EntriesEntity1>;
	}
	export interface EntriesEntity1 {
		type: string;
		key: string;
		quoteStyle: string;
		value: Value1;
		readonly: boolean;
	}
	export interface Value1 {
		type: string;
		name?: string;
		value?: TypeOrValue;
	}
	export interface TypeOrValue {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: Right10;
	}
	export interface Right10 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrRight;
	}
	export interface TypeOrRight {
		type: string;
		subject: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue>;
		meta: Meta13;
	}
	export interface Meta14 {
		syntax: string;
	}
	export interface PropsEntity1 {
		description: string;
		name: string;
		type: Type10;
	}
	export interface Type10 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta17;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface Meta17 {
		syntax: string;
	}
	export interface MethodsEntity5 {
		description: string;
		name: string;
		params?: Array<ParamsEntity9>;
		returns?: Returns4;
	}
	export interface ParamsEntity9 {
		description: string;
		name: string;
		type: Type9;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Returns4 {
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface CommandClient {
		extends?: Array<string>;
		description: string;
		name: string;
		constructr: Constructr3;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: Array<EventsEntity>;
		methods?: Array<MethodsEntity6>;
	}
	export interface Constructr3 {
		description: string;
		name: string;
		params?: Array<ParamsEntity10>;
	}
	export interface ParamsEntity10 {
		description: string;
		name: string;
		type: Type11;
		optional?: boolean;
		default?: boolean | string;
	}
	export interface Type11 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue33;
		right?: ValueOrTypeOrRightOrLeftOrObjectsEntity8;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue33 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity8 {
		type: string;
		subject: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta: Meta13;
	}
	export interface MethodsEntity6 {
		description: string;
		name: string;
		params?: Array<ParamsEntity11>;
		returns?: Returns5;
	}
	export interface ParamsEntity11 {
		description?: string;
		name: string;
		type: Type12;
		optional?: boolean;
		default?: number | string | number | boolean | boolean | number | boolean | string | number | boolean;
	}
	export interface Type12 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue34;
		objects?: Array<ObjectsEntity2>;
		meta?: Meta18;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue35;
		right?: Right11;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue34 {
		type: string;
		name: string;
	}
	export interface Meta18 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue35 {
		type: string;
		name: string;
	}
	export interface Right11 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue36;
		right?: Right12;
		name?: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue37;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta19;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue36 {
		type: string;
		name: string;
	}
	export interface Right12 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue38;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue>;
		meta?: Meta20;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue38 {
		type: string;
		name: string;
	}
	export interface Meta20 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue37 {
		type: string;
		name: string;
	}
	export interface Meta19 {
		syntax: string;
	}
	export interface Returns5 {
		type: Type8;
		description?: string;
	}
	export interface CommandInteraction {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity7>;
	}
	export interface MethodsEntity7 {
		description: string;
		name: string;
		params?: Array<ParamsEntity12>;
		returns: Returns6;
	}
	export interface ParamsEntity12 {
		description: string;
		name: string;
		type: Type13;
		optional?: boolean;
	}
	export interface Type13 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue39;
		right?: ValueOrTypeOrRightOrLeftOrObjectsEntity9;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue40;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta21;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue39 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity9 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue40 {
		type: string;
		name: string;
	}
	export interface Meta21 {
		syntax: string;
	}
	export interface Returns6 {
		type: Type14;
	}
	export interface Type14 {
		type: string;
		name?: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue41;
		objects?: Array<LeftOrRightOrTypeOrObjectsEntity1>;
		meta?: Meta22;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue41 {
		type: string;
		name: string;
	}
	export interface Meta22 {
		syntax: string;
	}
	export interface ComponentInteraction {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity7>;
	}
	export interface PropsEntity2 {
		description: string;
		name: string;
		type: Type15;
	}
	export interface Type15 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue27;
		right?: RightOrTypeOrObjectsEntityOrValue1;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity;
		meta?: Meta;
	}
	export interface ExtendedUser {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity8>;
	}
	export interface MethodsEntity8 {
		description: string;
		name: string;
		params?: Array<ParamsEntity13>;
		returns: Returns7;
	}
	export interface ParamsEntity13 {
		description: string;
		name: string;
		optional: boolean;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface Returns7 {
		type: Type2;
	}
	export interface GroupChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity9>;
	}
	export interface MethodsEntity9 {
		description: string;
		name: string;
		params?: Array<ParamsEntity14>;
		returns?: Returns8;
	}
	export interface ParamsEntity14 {
		description: string;
		name: string;
		type: Type16;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Type16 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue42;
		right?: TypeOrRightOrObjectsEntity7;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue43;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta23;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue42 {
		type: string;
		name: string;
	}
	export interface TypeOrRightOrObjectsEntity7 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue3;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta3;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue4;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue5;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue43 {
		type: string;
		name: string;
	}
	export interface Meta23 {
		syntax: string;
	}
	export interface Returns8 {
		type: Type17;
	}
	export interface Type17 {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta24;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue44;
		objects?: Array<ValueOrTypeOrRightOrLeftOrObjectsEntity10>;
	}
	export interface Meta24 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue44 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity10 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Guild {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity10>;
	}
	export interface MethodsEntity10 {
		description: string;
		name: string;
		params?: Array<ParamsEntity15>;
		returns?: Returns9;
	}
	export interface ParamsEntity15 {
		description: string;
		name: string;
		type: Type18;
		optional?: boolean;
		default?: string | number | boolean | number;
	}
	export interface Type18 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta17;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue45;
		right?: Right13;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue45 {
		type: string;
		name: string;
	}
	export interface Right13 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue15;
		right?: TypeOrRightOrObjectsEntity3;
	}
	export interface Returns9 {
		type: Type19;
		description?: string;
	}
	export interface Type19 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue46;
		objects?: Array<ObjectsEntity3>;
		meta?: Meta25;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue47;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue46 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity3 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity11;
		right?: Right14;
		entries?: Array<EntriesEntity>;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity11 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Right14 {
		type: string;
		left: ValueOrTypeOrRightOrLeftOrObjectsEntity10;
		right: ValueOrTypeOrRightOrLeftOrObjectsEntity10;
	}
	export interface Meta25 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue47 {
		type: string;
		name: string;
	}
	export interface GuildAuditLogEntry {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity3>;
		events?: [];
		methods?: [];
	}
	export interface PropsEntity3 {
		description: string;
		name: string;
		type: Type20;
	}
	export interface Type20 {
		type: string;
		name?: string;
		value?: Value2;
		meta?: Meta26;
	}
	export interface Value2 {
		type: string;
		name?: string;
		value?: Value3;
	}
	export interface Value3 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: Right15;
	}
	export interface Right15 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue48;
		right?: Right16;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue48 {
		type: string;
		name: string;
	}
	export interface Right16 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: Right17;
	}
	export interface Right17 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: Right18;
	}
	export interface Right18 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrRight1;
	}
	export interface TypeOrRight1 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrRightOrObjectsEntity6;
	}
	export interface Meta26 {
		syntax: string;
	}
	export interface GuildIntegration {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity11>;
	}
	export interface MethodsEntity11 {
		description: string;
		name: string;
		params?: Array<ParamsEntity16>;
		returns: Returns;
	}
	export interface ParamsEntity16 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		optional?: boolean;
	}
	export interface GuildPreview {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity12>;
	}
	export interface MethodsEntity12 {
		description: string;
		name: string;
		params?: Array<ParamsEntity17>;
		returns: Returns10;
	}
	export interface ParamsEntity17 {
		description: string;
		name: string;
		optional: boolean;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface Returns10 {
		type: TypeOrLeftOrRightOrObjectsEntity;
	}
	export interface TypeOrLeftOrRightOrObjectsEntity {
		type: string;
		value: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		meta: Meta13;
	}
	export interface GuildTemplate {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity13>;
	}
	export interface ParamsEntityOrPropsEntity1 {
		description: string;
		name: string;
		type: Type21;
	}
	export interface Type21 {
		type: string;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		meta?: Meta1;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue8;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue9;
	}
	export interface MethodsEntity13 {
		description: string;
		name: string;
		params?: Array<ParamsEntity18>;
		returns: Returns11;
	}
	export interface ParamsEntity18 {
		description: string;
		name: string;
		type: LeftOrRightOrTypeOrObjectsEntity1;
		optional?: boolean;
	}
	export interface Returns11 {
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity12;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity12 {
		type: string;
		subject: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta: Meta13;
	}
	export interface Invite {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity4>;
		events?: [];
		methods?: Array<MethodsEntity14>;
	}
	export interface PropsEntity4 {
		description: string;
		name: string;
		type: Type22;
	}
	export interface Type22 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue49;
		right?: RightOrType3;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue50;
		meta?: Meta27;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue49 {
		type: string;
		name: string;
	}
	export interface RightOrType3 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrObjectsEntityOrType;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue50 {
		type: string;
		name: string;
	}
	export interface Meta27 {
		syntax: string;
	}
	export interface MethodsEntity14 {
		description: string;
		name: string;
		params?: Array<ParamsEntity17>;
		returns: Returns;
	}
	export interface Member {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity15>;
	}
	export interface MethodsEntity15 {
		description: string;
		name: string;
		params?: Array<ParamsEntity19>;
		returns: Returns;
	}
	export interface ParamsEntity19 {
		description: string;
		name: string;
		type: Type2;
		optional?: boolean;
		default?: number;
	}
	export interface Message {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity5>;
		events?: [];
		methods?: Array<MethodsEntity16>;
	}
	export interface PropsEntity5 {
		description: string;
		name: string;
		type: Type23;
		optional?: boolean;
	}
	export interface Type23 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity13;
		meta?: Meta28;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue6;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue51;
		right?: RightOrTypeOrObjectsEntityOrValue2;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity13 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Meta28 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue51 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntityOrValue2 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface MethodsEntity16 {
		description: string;
		name: string;
		params?: Array<ParamsEntity20>;
		returns: Returns12;
	}
	export interface ParamsEntity20 {
		description: string;
		name: string;
		type: Type16;
		optional?: boolean;
		default?: number | string;
	}
	export interface Returns12 {
		type: Type24;
	}
	export interface Type24 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue52;
		objects?: Array<TypeOrRightOrObjectsEntity>;
		meta?: Meta29;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue52 {
		type: string;
		name: string;
	}
	export interface Meta29 {
		syntax: string;
	}
	export interface NewsChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity17>;
	}
	export interface MethodsEntity17 {
		description: string;
		name: string;
		params?: Array<ParamsEntity21>;
		returns: Returns13;
	}
	export interface ParamsEntity21 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Type25 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue53;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta30;
		name?: string;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue54;
		right?: TypeOrRightOrObjectsEntity8;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue53 {
		type: string;
		name: string;
	}
	export interface Meta30 {
		syntax: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue54 {
		type: string;
		name: string;
	}
	export interface TypeOrRightOrObjectsEntity8 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue3;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta3;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue4;
		right?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue5;
		name?: string;
	}
	export interface Returns13 {
		type: Type26;
		description?: string;
	}
	export interface Type26 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue55;
		objects?: Array<ObjectsEntity4>;
		meta?: Meta31;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue55 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity4 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue56;
		right?: TypeOrRight2;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue57;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta32;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue56 {
		type: string;
		name: string;
	}
	export interface TypeOrRight2 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue58;
		right?: RightOrType4;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue58 {
		type: string;
		name: string;
	}
	export interface RightOrType4 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		right: RightOrType1;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue57 {
		type: string;
		name: string;
	}
	export interface Meta32 {
		syntax: string;
	}
	export interface Meta31 {
		syntax: string;
	}
	export interface NewsThreadChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity18>;
	}
	export interface MethodsEntity18 {
		description: string;
		name: string;
		params?: Array<ParamsEntity22>;
		returns: Returns14;
	}
	export interface ParamsEntity22 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface Returns14 {
		type: Type27;
		description?: string;
	}
	export interface Type27 {
		type: string;
		name?: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue59;
		objects?: Array<ObjectsEntity5>;
		meta?: Meta33;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue59 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity5 {
		type: string;
		left?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue11;
		right?: RightOrTypeOrValue;
		name?: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue60;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta34;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue60 {
		type: string;
		name: string;
	}
	export interface Meta34 {
		syntax: string;
	}
	export interface Meta33 {
		syntax: string;
	}
	export interface Permission {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity19>;
	}
	export interface MethodsEntity19 {
		description: string;
		name: string;
		params?: Array<PropsEntityOrParamsEntity>;
		returns: Returns15;
	}
	export interface Returns15 {
		description: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface PermissionOverwrite {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity19>;
	}
	export interface PingInteraction {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity20>;
	}
	export interface MethodsEntity20 {
		description: string;
		name: string;
		params?: [];
		returns: Returns;
	}
	export interface PrivateChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity21>;
	}
	export interface ParamsEntityOrPropsEntity2 {
		description: string;
		name: string;
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity10;
	}
	export interface MethodsEntity21 {
		description: string;
		name: string;
		params?: Array<ParamsEntity23>;
		returns?: Returns16;
	}
	export interface ParamsEntity23 {
		description: string;
		name: string;
		type: Type16;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Returns16 {
		type: Type28;
	}
	export interface Type28 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue61;
		objects?: Array<ValueOrTypeOrRightOrLeftOrObjectsEntity10>;
		meta?: Meta35;
		name?: string;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue61 {
		type: string;
		name: string;
	}
	export interface Meta35 {
		syntax: string;
	}
	export interface PrivateThreadChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity22>;
	}
	export interface MethodsEntity22 {
		description: string;
		name: string;
		params?: Array<ParamsEntity24>;
		returns: Returns14;
	}
	export interface ParamsEntity24 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface PublicThreadChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity23>;
	}
	export interface MethodsEntity23 {
		description: string;
		name: string;
		params?: Array<ParamsEntity25>;
		returns: Returns14;
	}
	export interface ParamsEntity25 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface RelationshipOrVoiceState {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: [];
	}
	export interface RequestHandler {
		extends?: [];
		description: string;
		name: string;
		props?: [];
		events?: [];
		methods?: Array<MethodsEntity24>;
	}
	export interface MethodsEntity24 {
		description: string;
		name: string;
		params?: Array<ParamsEntity1>;
		returns: Returns17;
	}
	export interface Returns17 {
		description: string;
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity12;
	}
	export interface Role {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity25>;
	}
	export interface MethodsEntity25 {
		description: string;
		name: string;
		params?: Array<ParamsEntity26>;
		returns: Returns18;
	}
	export interface ParamsEntity26 {
		description: string;
		name: string;
		type: Type21;
		optional?: boolean;
	}
	export interface Returns18 {
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity10;
	}
	export interface SequentialBucket {
		extends?: [];
		description: string;
		name: string;
		constructr: Constructr;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntityOrEventsEntity>;
	}
	export interface MethodsEntityOrEventsEntity {
		description: string;
		name: string;
		params?: Array<PropsEntityOrParamsEntity>;
	}
	export interface Shard {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity6>;
		events?: Array<EventsEntity1>;
		methods?: Array<MethodsEntity26>;
	}
	export interface PropsEntity6 {
		description: string;
		name: string;
		type: Type29;
	}
	export interface Type29 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity14;
		meta?: Meta36;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity14 {
		type: string;
		subject: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta: Meta13;
	}
	export interface Meta36 {
		syntax: string;
	}
	export interface EventsEntity1 {
		description: string;
		name: string;
		params?: Array<ParamsEntity27>;
	}
	export interface ParamsEntity27 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntity;
	}
	export interface MethodsEntity26 {
		description: string;
		name: string;
		params?: Array<ParamsEntity28>;
	}
	export interface ParamsEntity28 {
		description: string;
		name: string;
		type: Type21;
		optional?: boolean;
	}
	export interface SharedStream {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: Array<EventsEntity2>;
		methods?: Array<MethodsEntity27>;
	}
	export interface EventsEntity2 {
		description: string;
		name: string;
		params?: Array<PropsEntityOrParamsEntity3>;
	}
	export interface PropsEntityOrParamsEntity3 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface MethodsEntity27 {
		description: string;
		name: string;
		params?: Array<ParamsEntity29>;
	}
	export interface ParamsEntity29 {
		description: string;
		name: string;
		type: TypeOrRightOrObjectsEntity;
		optional?: boolean;
		default?: number | boolean;
	}
	export interface StageChannelOrVoiceChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity28>;
	}
	export interface MethodsEntity28 {
		description: string;
		name: string;
		params?: Array<ParamsEntity30>;
		returns?: Returns19;
	}
	export interface ParamsEntity30 {
		description: string;
		name: string;
		type: Type3;
		optional?: boolean;
	}
	export interface Returns19 {
		type: Type27;
		description?: string;
	}
	export interface StageInstance {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity29>;
	}
	export interface MethodsEntity29 {
		description: string;
		name: string;
		params?: Array<ParamsEntity31>;
		returns: Returns18;
	}
	export interface ParamsEntity31 {
		description: string;
		name: string;
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		optional?: boolean;
	}
	export interface TextChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity30>;
	}
	export interface MethodsEntity30 {
		description: string;
		name: string;
		params?: Array<ParamsEntity32>;
		returns: Returns13;
	}
	export interface ParamsEntity32 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface ThreadChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity31>;
	}
	export interface MethodsEntity31 {
		description: string;
		name: string;
		params?: Array<ParamsEntity33>;
		returns: Returns14;
	}
	export interface ParamsEntity33 {
		description: string;
		name: string;
		type: Type25;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface ThreadMember {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity20>;
	}
	export interface UnknownInteraction {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity7>;
		events?: [];
		methods?: Array<MethodsEntity7>;
	}
	export interface PropsEntity7 {
		description: string;
		name: string;
		type: Type30;
	}
	export interface Type30 {
		type: string;
		name?: string;
		left?: TypeOrLeftOrRightOrObjectsEntity1;
		right?: Right19;
		value?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue62;
		meta?: Meta37;
	}
	export interface TypeOrLeftOrRightOrObjectsEntity1 {
		type: string;
		value: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
		meta: Meta13;
	}
	export interface Right19 {
		type: string;
		left: TypeOrLeftOrRightOrObjectsEntity;
		right: TypeOrLeftOrRightOrObjectsEntity;
	}
	export interface TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue62 {
		type: string;
		name: string;
	}
	export interface Meta37 {
		syntax: string;
	}
	export interface User {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity8>;
	}
	export interface VoiceConnection {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity8>;
		events?: Array<EventsEntity3>;
		methods?: Array<MethodsEntity32>;
	}
	export interface PropsEntity8 {
		description: string;
		name: string;
		type: Type31;
	}
	export interface Type31 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity15;
		meta?: Meta38;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity15 {
		type: string;
		subject?: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue1;
		objects?: Array<TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2>;
		meta?: Meta2;
		name?: string;
	}
	export interface Meta38 {
		syntax: string;
	}
	export interface EventsEntity3 {
		description: string;
		name: string;
		params?: Array<ParamsEntityOrPropsEntity3>;
	}
	export interface ParamsEntityOrPropsEntity3 {
		description: string;
		name: string;
		type: LeftOrRightOrTypeOrObjectsEntity1;
	}
	export interface MethodsEntity32 {
		description: string;
		name: string;
		params?: Array<ParamsEntity34>;
		returns?: Returns20;
	}
	export interface ParamsEntity34 {
		description: string;
		name: string;
		type: TypeOrRightOrObjectsEntity;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface Returns20 {
		type: TypeOrLeftOrRightOrObjectsEntityOrSubjectOrValue2;
	}
	export interface VoiceDataStream {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: Array<MethodsEntityOrEventsEntity>;
		methods?: [];
	}
	export interface Constants {
		AuditLogActions: AuditLogActions;
		Intents: Intents;
		Permissions: Permissions;
		VERSION: string;
	}
	export interface AuditLogActions {
		GUILD_UPDATE: number;
		CHANNEL_CREATE: number;
		CHANNEL_UPDATE: number;
		CHANNEL_DELETE: number;
		CHANNEL_OVERWRITE_CREATE: number;
		CHANNEL_OVERWRITE_UPDATE: number;
		CHANNEL_OVERWRITE_DELETE: number;
		MEMBER_KICK: number;
		MEMBER_PRUNE: number;
		MEMBER_BAN_ADD: number;
		MEMBER_BAN_REMOVE: number;
		MEMBER_UPDATE: number;
		MEMBER_ROLE_UPDATE: number;
		MEMBER_MOVE: number;
		MEMBER_DISCONNECT: number;
		BOT_ADD: number;
		ROLE_CREATE: number;
		ROLE_UPDATE: number;
		ROLE_DELETE: number;
		INVITE_CREATE: number;
		INVITE_UPDATE: number;
		INVITE_DELETE: number;
		WEBHOOK_CREATE: number;
		WEBHOOK_UPDATE: number;
		WEBHOOK_DELETE: number;
		EMOJI_CREATE: number;
		EMOJI_UPDATE: number;
		EMOJI_DELETE: number;
		MESSAGE_DELETE: number;
		MESSAGE_BULK_DELETE: number;
		MESSAGE_PIN: number;
		MESSAGE_UNPIN: number;
		INTEGRATION_CREATE: number;
		INTEGRATION_UPDATE: number;
		INTEGRATION_DELETE: number;
		STAGE_INSTANCE_CREATE: number;
		STAGE_INSTANCE_UPDATE: number;
		STAGE_INSTANCE_DELETE: number;
		STICKER_CREATE: number;
		STICKER_UPDATE: number;
		STICKER_DELETE: number;
		GUILD_SCHEDULED_EVENT_CREATE: number;
		GUILD_SCHEDULED_EVENT_UPDATE: number;
		GUILD_SCHEDULED_EVENT_DELETE: number;
		THREAD_CREATE: number;
		THREAD_UPDATE: number;
		THREAD_DELETE: number;
		APPLICATION_COMMAND_PERMISSION_UPDATE: number;
	}
	export interface Intents {
		guilds: number;
		guildMembers: number;
		guildBans: number;
		guildEmojisAndStickers: number;
		guildEmojis: number;
		guildIntegrations: number;
		guildWebhooks: number;
		guildInvites: number;
		guildVoiceStates: number;
		guildPresences: number;
		guildMessages: number;
		guildMessageReactions: number;
		guildMessageTyping: number;
		directMessages: number;
		directMessageReactions: number;
		directMessageTyping: number;
		allNonPrivileged: number;
		allPrivileged: number;
		all: number;
	}
	export interface Permissions {
		createInstantInvite: string;
		kickMembers: string;
		banMembers: string;
		administrator: string;
		manageChannels: string;
		manageGuild: string;
		addReactions: string;
		viewAuditLog: string;
		viewAuditLogs: string;
		voicePrioritySpeaker: string;
		voiceStream: string;
		stream: string;
		viewChannel: string;
		readMessages: string;
		sendMessages: string;
		sendTTSMessages: string;
		manageMessages: string;
		embedLinks: string;
		attachFiles: string;
		readMessageHistory: string;
		mentionEveryone: string;
		useExternalEmojis: string;
		externalEmojis: string;
		viewGuildInsights: string;
		voiceConnect: string;
		voiceSpeak: string;
		voiceMuteMembers: string;
		voiceDeafenMembers: string;
		voiceMoveMembers: string;
		voiceUseVAD: string;
		changeNickname: string;
		manageNicknames: string;
		manageRoles: string;
		manageWebhooks: string;
		manageEmojisAndStickers: string;
		manageEmojis: string;
		useApplicationCommands: string;
		useSlashCommands: string;
		voiceRequestToSpeak: string;
		manageEvents: string;
		manageThreads: string;
		createPublicThreads: string;
		createPrivateThreads: string;
		useExternalStickers: string;
		sendMessagesInThreads: string;
		startEmbeddedActivities: string;
		allGuild: string;
		allText: string;
		allVoice: string;
		all: string;
	}
}

export = Eris0_16_0;
