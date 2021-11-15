declare namespace Eris_0_14_1 {
	export interface Root {
		Bucket: Bucket;
		Call: Call;
		CategoryChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		Channel: ChannelOrUnavailableGuild;
		Client: Client;
		Collection: Collection;
		Command: Command;
		CommandClient: CommandClient;
		ExtendedUser: ExtendedUser;
		GroupChannel: GroupChannel;
		Guild: Guild;
		GuildAuditLogEntry: GuildAuditLogEntry;
		GuildChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		GuildIntegration: GuildIntegration;
		GuildPreview: GuildPreview;
		Invite: Invite;
		Member: Member;
		Message: Message;
		NewsChannel: NewsChannel;
		Permission: Permission;
		PermissionOverwrite: PermissionOverwrite;
		PrivateChannel: PrivateChannel;
		Relationship: RelationshipOrVoiceState;
		RequestHandler: RequestHandler;
		Role: Role;
		SequentialBucket: SequentialBucket;
		Shard: Shard;
		SharedStream: SharedStream;
		StoreChannel: CategoryChannelOrGuildChannelOrStoreChannel;
		TextChannel: TextChannel;
		UnavailableGuild: ChannelOrUnavailableGuild;
		User: User;
		VoiceChannel: VoiceChannel;
		VoiceConnection: VoiceConnection;
		VoiceDataStream: VoiceDataStream;
		VoiceState: RelationshipOrVoiceState;
		Constants: Constants;
	}
	export interface Bucket {
		extends?: [];
		description: string;
		name: string;
		constructr: Constructr;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity>;
	}
	export interface Constructr {
		description: string;
		name: string;
		params?: Array<ParamsEntity>;
	}
	export interface ParamsEntity {
		description: string;
		name: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		optional?: boolean;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight {
		type: string;
		name: string;
	}
	export interface PropsEntityOrParamsEntity {
		description: string;
		name: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface MethodsEntity {
		description: string;
		name: string;
		params?: Array<ParamsEntity1>;
	}
	export interface ParamsEntity1 {
		description: string;
		name: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
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
		type: Type;
	}
	export interface Type {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity;
		meta?: Meta;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight1;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta1;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2 {
		type: string;
		name: string;
	}
	export interface Meta1 {
		syntax: string;
	}
	export interface Meta {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight1 {
		type: string;
		name: string;
	}
	export interface CategoryChannelOrGuildChannelOrStoreChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity1>;
	}
	export interface PropsEntityOrParamsEntity2 {
		description: string;
		name: string;
		type: Type1;
	}
	export interface Type1 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta2;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight1;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3 {
		type: string;
		name: string;
	}
	export interface Meta2 {
		syntax: string;
	}
	export interface MethodsEntity1 {
		description: string;
		name: string;
		params?: Array<ParamsEntity2>;
		returns: Returns;
	}
	export interface ParamsEntity2 {
		description: string;
		name: string;
		type: Type2;
		optional?: boolean;
	}
	export interface Type2 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta3;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight4;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight5;
	}
	export interface Meta3 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight4 {
		type: string;
		name: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight5 {
		type: string;
		name: string;
	}
	export interface Returns {
		type: Type3;
	}
	export interface Type3 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight6;
		objects?: Array<ObjectsEntity>;
		meta?: Meta4;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight6 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight7;
		right?: RightOrTypeOrObjectsEntityOrValue;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight7 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntityOrValue {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: RightOrTypeOrObjectsEntityOrValue1;
	}
	export interface RightOrTypeOrObjectsEntityOrValue1 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface Meta4 {
		syntax: string;
	}
	export interface ChannelOrUnavailableGuild {
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
		methods?: Array<MethodsEntity2>;
	}
	export interface Constructr1 {
		description: string;
		name: string;
		params?: Array<ParamsEntity3>;
	}
	export interface ParamsEntity3 {
		description: string;
		name: string;
		type: Type4;
		optional?: boolean;
		default?: boolean | number | string;
	}
	export interface Type4 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight8;
		right?: ValueOrTypeOrRightOrLeftOrObjectsEntity1;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight8 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity1 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta1;
	}
	export interface EventsEntity {
		description: string;
		name: string;
		params?: Array<ParamsEntity4>;
	}
	export interface ParamsEntity4 {
		description: string;
		name: string;
		type: Type5;
		optional?: boolean;
	}
	export interface Type5 {
		type: string;
		name?: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity;
		meta?: Meta;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight1;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		left?: ValueOrTypeOrRightOrLeftOrObjectsEntity2;
		right?: Right;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity2 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta1;
	}
	export interface Right {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight9;
		right?: Right1;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight10;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta5;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight9 {
		type: string;
		name: string;
	}
	export interface Right1 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight11;
		right?: Right2;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight11 {
		type: string;
		name: string;
	}
	export interface Right2 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight12;
		right?: RightOrTypeOrObjectsEntity;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight12 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntity {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight13;
		right?: RightOrTypeOrObjectsEntityOrValue2;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight13 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntityOrValue2 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight10 {
		type: string;
		name: string;
	}
	export interface Meta5 {
		syntax: string;
	}
	export interface MethodsEntity2 {
		description: string;
		name: string;
		params?: Array<ParamsEntity5>;
		returns?: Returns1;
	}
	export interface ParamsEntity5 {
		description: string;
		name: string;
		type: Type6;
		optional?: boolean;
		default?: number | string | boolean | boolean | string | boolean | number;
	}
	export interface Type6 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta6;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight14;
		right?: RightOrType;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
	}
	export interface Meta6 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight14 {
		type: string;
		name: string;
	}
	export interface RightOrType {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight15;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight16;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight17;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta7;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight15 {
		type: string;
		name: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight16 {
		type: string;
		name: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight17 {
		type: string;
		name: string;
	}
	export interface Meta7 {
		syntax: string;
	}
	export interface Returns1 {
		type: Type7;
		description?: string;
	}
	export interface Type7 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight18;
		objects?: Array<ObjectsEntity1>;
		meta?: Meta8;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight19;
		right?: RightOrTypeOrObjectsEntity1;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight18 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity1 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight20;
		right?: Right3;
		value?: Value;
		meta?: Meta9;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight21;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight20 {
		type: string;
		name: string;
	}
	export interface Right3 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: Right4;
	}
	export interface Right4 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight22;
		right?: RightOrValue;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight22 {
		type: string;
		name: string;
	}
	export interface RightOrValue {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: TypeOrRight;
	}
	export interface TypeOrRight {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight23;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight24;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight23 {
		type: string;
		name: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight24 {
		type: string;
		name: string;
	}
	export interface Value {
		type: string;
		name?: string;
		left?: TypeOrValueOrRightOrLeftOrObjectsEntity;
		right?: RightOrValue1;
	}
	export interface TypeOrValueOrRightOrLeftOrObjectsEntity {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta: Meta10;
	}
	export interface Meta10 {
		syntax: string;
	}
	export interface RightOrValue1 {
		type: string;
		left: TypeOrValueOrRightOrLeftOrObjectsEntity1;
		right: TypeOrRight1;
	}
	export interface TypeOrValueOrRightOrLeftOrObjectsEntity1 {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta: Meta10;
	}
	export interface TypeOrRight1 {
		type: string;
		left: TypeOrValueOrRightOrLeftOrObjectsEntity1;
		right: TypeOrValueOrRightOrLeftOrObjectsEntity1;
	}
	export interface Meta9 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight21 {
		type: string;
		name: string;
	}
	export interface Meta8 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight19 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntity1 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: ObjectsEntityOrRightOrType;
	}
	export interface ObjectsEntityOrRightOrType {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: RightOrTypeOrObjectsEntityOrValue3;
	}
	export interface RightOrTypeOrObjectsEntityOrValue3 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: RightOrTypeOrObjectsEntityOrValue1;
	}
	export interface Collection {
		extends?: Array<string>;
		description: string;
		name: string;
		constructr: Constructr;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity3>;
	}
	export interface ParamsEntityOrPropsEntity {
		description: string;
		name: string;
		type: Type8;
	}
	export interface Type8 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta3;
	}
	export interface MethodsEntity3 {
		description: string;
		name: string;
		params?: Array<ParamsEntity6>;
		returns: Returns2;
	}
	export interface ParamsEntity6 {
		description: string;
		name: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		optional?: boolean;
	}
	export interface Returns2 {
		description: string;
		type: Type1;
	}
	export interface Command {
		extends?: [];
		description: string;
		name: string;
		constructr: Constructr2;
		props?: Array<PropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity4>;
	}
	export interface Constructr2 {
		description: string;
		name: string;
		params?: Array<ParamsEntity7>;
	}
	export interface ParamsEntity7 {
		description: string;
		name: string;
		type: Type9;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Type9 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight25;
		right?: Right5;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight26;
		objects?: Array<ObjectsEntity2>;
		meta?: Meta11;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight25 {
		type: string;
		name: string;
	}
	export interface Right5 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight27;
		right?: Right6;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight28;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta12;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight27 {
		type: string;
		name: string;
	}
	export interface Right6 {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue1>;
		meta: Meta10;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight28 {
		type: string;
		name: string;
	}
	export interface Meta12 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight26 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity2 {
		type: string;
		name?: string;
		entries?: Array<EntriesEntity>;
	}
	export interface EntriesEntity {
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
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: Right7;
	}
	export interface Right7 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: Right8;
	}
	export interface Right8 {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue1>;
		meta: Meta10;
	}
	export interface Meta11 {
		syntax: string;
	}
	export interface PropsEntity {
		description: string;
		name: string;
		type: Type10;
	}
	export interface Type10 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta6;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight4;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight5;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
	}
	export interface MethodsEntity4 {
		description: string;
		name: string;
		params?: Array<ParamsEntity8>;
		returns?: Returns3;
	}
	export interface ParamsEntity8 {
		description: string;
		name: string;
		type: Type9;
		optional?: boolean;
		default?: boolean | string | number;
	}
	export interface Returns3 {
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface CommandClient {
		extends?: Array<string>;
		description: string;
		name: string;
		constructr: Constructr3;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: Array<EventsEntity>;
		methods?: Array<MethodsEntity5>;
	}
	export interface Constructr3 {
		description: string;
		name: string;
		params?: Array<ParamsEntity9>;
	}
	export interface ParamsEntity9 {
		description: string;
		name: string;
		type: Type11;
		optional?: boolean;
		default?: boolean | string;
	}
	export interface Type11 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight29;
		right?: TypeOrValueOrRightOrLeftOrObjectsEntity2;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight29 {
		type: string;
		name: string;
	}
	export interface TypeOrValueOrRightOrLeftOrObjectsEntity2 {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta: Meta10;
	}
	export interface MethodsEntity5 {
		description: string;
		name: string;
		params?: Array<ParamsEntity10>;
		returns?: Returns4;
	}
	export interface ParamsEntity10 {
		description: string;
		name: string;
		type: Type12;
		optional?: boolean;
		default?: number | string | boolean | boolean | string | boolean | number | boolean | string | number;
	}
	export interface Type12 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta13;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight30;
		right?: Right9;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight31;
		objects?: Array<ObjectsEntity2>;
	}
	export interface Meta13 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight30 {
		type: string;
		name: string;
	}
	export interface Right9 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight32;
		right?: Right10;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight33;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta14;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight32 {
		type: string;
		name: string;
	}
	export interface Right10 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight34;
		objects?: Array<RightOrTypeOrObjectsEntityOrValue1>;
		meta?: Meta15;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight34 {
		type: string;
		name: string;
	}
	export interface Meta15 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight33 {
		type: string;
		name: string;
	}
	export interface Meta14 {
		syntax: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight31 {
		type: string;
		name: string;
	}
	export interface Returns4 {
		type: Type7;
		description?: string;
	}
	export interface ExtendedUser {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity6>;
	}
	export interface MethodsEntity6 {
		description: string;
		name: string;
		params?: Array<ParamsEntity11>;
		returns?: Returns5;
	}
	export interface ParamsEntity11 {
		description: string;
		name: string;
		optional: boolean;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface Returns5 {
		type: TypeOrValueOrRightOrLeftOrObjectsEntity1;
	}
	export interface GroupChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity7>;
	}
	export interface MethodsEntity7 {
		description: string;
		name: string;
		params?: Array<ParamsEntity12>;
		returns?: Returns6;
	}
	export interface ParamsEntity12 {
		description: string;
		name: string;
		type: Type13;
		optional?: boolean;
		default?: number | string;
	}
	export interface Type13 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight35;
		right?: RightOrType1;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight35 {
		type: string;
		name: string;
	}
	export interface RightOrType1 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight15;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight16;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight17;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta7;
		name?: string;
	}
	export interface Returns6 {
		type: Type14;
	}
	export interface Type14 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight36;
		objects?: Array<ValueOrTypeOrRightOrLeftOrObjectsEntity3>;
		meta?: Meta16;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight36 {
		type: string;
		name: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity3 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta1;
	}
	export interface Meta16 {
		syntax: string;
	}
	export interface Guild {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity8>;
	}
	export interface MethodsEntity8 {
		description: string;
		name: string;
		params?: Array<ParamsEntity13>;
		returns?: Returns7;
	}
	export interface ParamsEntity13 {
		description: string;
		name: string;
		type: Type10;
		optional?: boolean;
		default?: boolean | number;
	}
	export interface Returns7 {
		type: Type15;
		description?: string;
	}
	export interface Type15 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight37;
		objects?: Array<ObjectsEntity3>;
		meta?: Meta17;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight37 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity3 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight13;
		right?: RightOrTypeOrObjectsEntityOrValue2;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight38;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta18;
		value?: RightOrValue2;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight38 {
		type: string;
		name: string;
	}
	export interface Meta18 {
		syntax: string;
	}
	export interface RightOrValue2 {
		type: string;
		left: TypeOrValueOrRightOrLeftOrObjectsEntity1;
		right: TypeOrRight1;
	}
	export interface Meta17 {
		syntax: string;
	}
	export interface GuildAuditLogEntry {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity1>;
		events?: [];
		methods?: [];
	}
	export interface PropsEntity1 {
		description: string;
		name: string;
		type: Type16;
	}
	export interface Type16 {
		type: string;
		name?: string;
		value?: Value2;
		meta?: Meta19;
	}
	export interface Value2 {
		type: string;
		name?: string;
		value?: Value3;
	}
	export interface Value3 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: Right11;
	}
	export interface Right11 {
		type: string;
		name?: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight39;
		right?: TypeOrRight2;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight39 {
		type: string;
		name: string;
	}
	export interface TypeOrRight2 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight40;
		right?: RightOrTypeOrObjectsEntity2;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight40 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntity2 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: RightOrTypeOrObjectsEntity3;
	}
	export interface RightOrTypeOrObjectsEntity3 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: ObjectsEntityOrRightOrType;
	}
	export interface Meta19 {
		syntax: string;
	}
	export interface GuildIntegration {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity9>;
	}
	export interface MethodsEntity9 {
		description: string;
		name: string;
		params?: Array<ParamsEntity14>;
		returns: Returns8;
	}
	export interface ParamsEntity14 {
		description: string;
		name: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		optional?: boolean;
	}
	export interface Returns8 {
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface GuildPreview {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity10>;
	}
	export interface MethodsEntity10 {
		description: string;
		name: string;
		params?: Array<ParamsEntity15>;
	}
	export interface ParamsEntity15 {
		description: string;
		name: string;
		optional: boolean;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface Invite {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity11>;
	}
	export interface PropsEntity2 {
		description: string;
		name: string;
		type: Type17;
	}
	export interface Type17 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight41;
		right?: ObjectsEntityOrRightOrType1;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight42;
		meta?: Meta20;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight41 {
		type: string;
		name: string;
	}
	export interface ObjectsEntityOrRightOrType1 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: RightOrTypeOrObjectsEntityOrValue3;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight42 {
		type: string;
		name: string;
	}
	export interface Meta20 {
		syntax: string;
	}
	export interface MethodsEntity11 {
		description: string;
		name: string;
		params?: Array<ParamsEntity15>;
		returns: Returns8;
	}
	export interface Member {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity12>;
	}
	export interface MethodsEntity12 {
		description: string;
		name: string;
		params?: Array<ParamsEntity16>;
		returns: Returns8;
	}
	export interface ParamsEntity16 {
		description: string;
		name: string;
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity3;
		optional?: boolean;
		default?: number;
	}
	export interface Message {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntity3>;
		events?: [];
		methods?: Array<MethodsEntity13>;
	}
	export interface PropsEntity3 {
		description: string;
		name: string;
		type: Type18;
		optional?: boolean;
	}
	export interface Type18 {
		type: string;
		name?: string;
		value?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight3;
		meta?: Meta2;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight1;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight43;
		right?: RightOrTypeOrObjectsEntityOrValue4;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight43 {
		type: string;
		name: string;
	}
	export interface RightOrTypeOrObjectsEntityOrValue4 {
		type: string;
		left: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		right: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface MethodsEntity13 {
		description: string;
		name: string;
		params?: Array<ParamsEntity17>;
		returns: Returns9;
	}
	export interface ParamsEntity17 {
		description: string;
		name: string;
		type: Type19;
		optional?: boolean;
		default?: number | string;
	}
	export interface Type19 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight44;
		right?: Right12;
		name?: string;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight44 {
		type: string;
		name: string;
	}
	export interface Right12 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight15;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight16;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight45;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta21;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight45 {
		type: string;
		name: string;
	}
	export interface Meta21 {
		syntax: string;
	}
	export interface Returns9 {
		type: Type14;
	}
	export interface NewsChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity14>;
	}
	export interface MethodsEntity14 {
		description: string;
		name: string;
		params?: Array<ParamsEntity18>;
		returns: Returns10;
	}
	export interface ParamsEntity18 {
		description: string;
		name: string;
		type: Type6;
		optional?: boolean;
		default?: number | string;
	}
	export interface Returns10 {
		type: Type20;
		description?: string;
	}
	export interface Type20 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight46;
		objects?: Array<ObjectsEntity4>;
		meta?: Meta22;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight46 {
		type: string;
		name: string;
	}
	export interface ObjectsEntity4 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight7;
		right?: RightOrTypeOrObjectsEntityOrValue;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight47;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta23;
	}
	export interface TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight47 {
		type: string;
		name: string;
	}
	export interface Meta23 {
		syntax: string;
	}
	export interface Meta22 {
		syntax: string;
	}
	export interface Permission {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity15>;
	}
	export interface MethodsEntity15 {
		description: string;
		name: string;
		params?: Array<PropsEntityOrParamsEntity>;
		returns: Returns11;
	}
	export interface Returns11 {
		description: string;
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
	}
	export interface PermissionOverwrite {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity15>;
	}
	export interface PrivateChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity1>;
		events?: [];
		methods?: Array<MethodsEntity16>;
	}
	export interface ParamsEntityOrPropsEntity1 {
		description: string;
		name: string;
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity3;
	}
	export interface MethodsEntity16 {
		description: string;
		name: string;
		params?: Array<ParamsEntity19>;
		returns?: Returns12;
	}
	export interface ParamsEntity19 {
		description: string;
		name: string;
		type: Type13;
		optional?: boolean;
		default?: number | string;
	}
	export interface Returns12 {
		type: Type14;
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
		methods?: Array<MethodsEntity17>;
	}
	export interface MethodsEntity17 {
		description: string;
		name: string;
		params?: Array<ParamsEntity>;
		returns: Returns13;
	}
	export interface Returns13 {
		description: string;
		type: TypeOrValueOrRightOrLeftOrObjectsEntity1;
	}
	export interface Role {
		extends?: [];
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity>;
		events?: [];
		methods?: Array<MethodsEntity18>;
	}
	export interface MethodsEntity18 {
		description: string;
		name: string;
		params?: Array<ParamsEntity>;
		returns: Returns14;
	}
	export interface Returns14 {
		type: ValueOrTypeOrRightOrLeftOrObjectsEntity3;
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
		props?: Array<PropsEntity4>;
		events?: Array<EventsEntity1>;
		methods?: Array<MethodsEntity19>;
	}
	export interface PropsEntity4 {
		description: string;
		name: string;
		type: Type21;
	}
	export interface Type21 {
		type: string;
		name?: string;
		value?: TypeOrValueOrRightOrLeftOrObjectsEntity3;
		meta?: Meta24;
	}
	export interface TypeOrValueOrRightOrLeftOrObjectsEntity3 {
		type: string;
		subject: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta: Meta10;
	}
	export interface Meta24 {
		syntax: string;
	}
	export interface EventsEntity1 {
		description: string;
		name: string;
		params?: [];
	}
	export interface MethodsEntity19 {
		description: string;
		name: string;
		params?: Array<ParamsEntity20>;
	}
	export interface ParamsEntity20 {
		description: string;
		name: string;
		type: Type2;
		optional?: boolean;
	}
	export interface SharedStream {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: Array<EventsEntity1>;
		methods?: Array<MethodsEntity20>;
	}
	export interface MethodsEntity20 {
		description: string;
		name: string;
		params?: Array<ParamsEntity21>;
	}
	export interface ParamsEntity21 {
		description: string;
		name: string;
		type: RightOrType2;
		optional?: boolean;
		default?: number | boolean;
	}
	export interface RightOrType2 {
		type: string;
		left?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight15;
		right?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight16;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight17;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta7;
		name?: string;
	}
	export interface TextChannel {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntityOrParamsEntity2>;
		events?: [];
		methods?: Array<MethodsEntity21>;
	}
	export interface MethodsEntity21 {
		description: string;
		name: string;
		params?: Array<ParamsEntity22>;
		returns: Returns10;
	}
	export interface ParamsEntity22 {
		description: string;
		name: string;
		type: Type6;
		optional?: boolean;
		default?: number | string;
	}
	export interface User {
		extends?: [];
		description: string;
		name: string;
		props?: Array<ParamsEntityOrPropsEntity>;
		events?: [];
		methods?: Array<MethodsEntity6>;
	}
	export interface VoiceChannel {
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
		params?: Array<ParamsEntity23>;
		returns?: Returns15;
	}
	export interface ParamsEntity23 {
		description: string;
		name: string;
		type: Type2;
		optional?: boolean;
	}
	export interface Returns15 {
		type: Type20;
		description?: string;
	}
	export interface VoiceConnection {
		extends?: Array<string>;
		description: string;
		name: string;
		props?: Array<PropsEntity5>;
		events?: Array<EventsEntity2>;
		methods?: Array<MethodsEntity23>;
	}
	export interface PropsEntity5 {
		description: string;
		name: string;
		type: Type22;
	}
	export interface Type22 {
		type: string;
		value?: ValueOrTypeOrRightOrLeftOrObjectsEntity4;
		meta?: Meta25;
		name?: string;
	}
	export interface ValueOrTypeOrRightOrLeftOrObjectsEntity4 {
		type: string;
		name?: string;
		subject?: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight2;
		objects?: Array<TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight>;
		meta?: Meta1;
	}
	export interface Meta25 {
		syntax: string;
	}
	export interface EventsEntity2 {
		description: string;
		name: string;
		params?: Array<ParamsEntityOrPropsEntity2>;
	}
	export interface ParamsEntityOrPropsEntity2 {
		description: string;
		name: string;
		type: Type8;
	}
	export interface MethodsEntity23 {
		description: string;
		name: string;
		params?: Array<ParamsEntity24>;
		returns?: Returns16;
	}
	export interface ParamsEntity24 {
		description: string;
		name: string;
		type: RightOrType2;
		optional?: boolean;
		default?: number | boolean | string;
	}
	export interface Returns16 {
		type: TypeOrValueOrObjectsEntityOrSubjectOrLeftOrRight;
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
	}
	export interface Intents {
		guilds: number;
		guildMembers: number;
		guildBans: number;
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
	}
	export interface Permissions {
		createInstantInvite: string;
		kickMembers: string;
		banMembers: string;
		administrator: string;
		manageChannels: string;
		manageGuild: string;
		addReactions: string;
		viewAuditLogs: string;
		voicePrioritySpeaker: string;
		stream: string;
		readMessages: string;
		sendMessages: string;
		sendTTSMessages: string;
		manageMessages: string;
		embedLinks: string;
		attachFiles: string;
		readMessageHistory: string;
		mentionEveryone: string;
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
		manageEmojis: string;
		all: string;
		allGuild: string;
		allText: string;
		allVoice: string;
	}
}

export = Eris_0_14_1;
