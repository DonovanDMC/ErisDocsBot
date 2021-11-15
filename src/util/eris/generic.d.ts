declare namespace AST {
	type Node =
	NameNode | MemberNode | InnerMemberNode | InstanceMemberNode |
	UnionNode | IntersectionNode | RecordNode | RecordEntryNode |
	GenericNode | FunctionNode | OptionalNode | NullableNode |
	NotNullableNode | VariadicNode | ModuleNode | FilePathNode |
	ExternalNode | StringValueNode | NumberValueNode | AnyNode |
	UnknownNode | ParenthesisNode;

	interface NameNode {
		type: "NAME";
		name: string;
	}

	interface MemberNode {
		type: "MEMBER";
		name: string;
		quotStyle: string;
		owner: Node;
		hasEventPrefix: boolean;
	}

	interface InnerMemberNode {
		type: "INNER_MEMBER";
		name: string;
		quoteStyle: string;
		owner: Node;
		hasEventPrefix: boolean;
	}

	interface InstanceMemberNode {
		type: "INSTANCE_MEMBER";
		name: string;
		quoteStyle: string;
		owner: Node;
		hasEventPrefix: boolean;
	}

	interface UnionNode {
		type: "UNION";
		left: Node;
		right: Node;
	}

	interface IntersectionNode {
		type: "INTERSECTION";
		left: Node;
		right: Node;
	}

	interface RecordNode {
		type: "RECORD";
		entries: Array<RecordEntryNode>;
	}

	interface RecordEntryNode {
		type: "RECORD_ENTRY";
		key: string;
		value: Node | null;
	}

	interface GenericNode {
		type: "GENERIC";
		subject: Node;
		objects: Array<Node>;
		meta: {
			syntax: "ANGLE_BRACKET" | "ANGLE_BRACKET_WITH_DOT" | "SQUARE_BRACKET";
		};
	}

	interface FunctionNode {
		type: "FUNCTION";
		params: Array<Node>;
		returns: Node | null;
		new: Node | null;
		this: Node | null;
	}

	interface OptionalNode {
		type: "OPTIONAL";
		value: Node;
		meta: {
			syntax: "SUFFIX_EQUALS_SIGN";
		};
	}

	interface NullableNode {
		type: "NULLABLE";
		vlaue: Node;
		meta: {
			syntax: "PREFIX_QUESTION_MARK" | "SUFFIX_QUESTION_MARK";
		};
	}

	interface NotNullableNode {
		type: "NOT_NULLABLE";
		value: Node;
		meta: {
			syntax: "PREFIX_BANG" | "SUFFIX_BANG";
		};
	}

	interface VariadicNode {
		type: "VARIADIC";
		value: Node | null;
		meta: {
			syntax: "PREFIX_DOTS" | "SUFFIX_DOTS" | "ONLY_DOTS";
		};
	}

	interface ModuleNode {
		type: "MODULE";
		value: Node;
	}

	interface FilePathNode {
		type: "FILE_PATH";
		path: string;
	}

	interface ExternalNode {
		type: "EXTERNAL";
		value: Node;
	}

	interface StringValueNode {
		type: "STRING_VALUE";
		quoteStyle: "single" | "double";
		string: string;
	}

	interface NumberValueNode {
		type: "NUMBER_VALUE";
		number: string;
	}

	interface AnyNode {
		type: "ANY";
	}

	interface UnknownNode {
		type: "UNKNOWN";
	}

	interface ParenthesisNode {
		type: "PARENTHESIS";
		value: Node;
	}

}

interface Method {
	description: string;
	name: string;
	params: Array<AST.Node>;
}

interface RootObject {
	extends: Array<string>;
	description: string;
	name: string;
	props: Array<AST.Node>;
	events: Array<string>;
	methods: Pick<AST.FunctionNode, "">;
}
