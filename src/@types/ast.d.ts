declare namespace AST {
	type Root = Record<string, ClassDefinition>;
	interface ClassDefinition {
		name: string;
		description: string;
		extends: string | null;
		constructor: ConstructorDefinition;
		events: Array<EventDefinition>;
		properties: Array<PropertyDefinition>;
		methods: Array<MethodDefinition>;
	}

	interface ConstructorDefinition {
		name: string;
		description: string;
		params: Array<ParameterDefinition>;
	}

	interface ParameterDefinition {
		name: string;
		description: string;
		optional: boolean;
		nullable: boolean;
		type: Array<string> | string;
	}

	interface PropertyDefinition {
		name: string;
		description: string;
		optional: boolean;
		nullable: boolean;
		type: Array<string> | string;
	}

	interface MethodDefinition {
		name: string;
		prefixedName: string;
		description: string;
		params: Array<ParameterDefinition>;
		returns: {
			type: Array<string> | string;
			description: string | null;
		};
	}

	interface EventDefinition {
		name: string;
		prefixedName: string;
		description: string;
		params: Array<ParameterDefinition>;
	}
}

export = AST;
