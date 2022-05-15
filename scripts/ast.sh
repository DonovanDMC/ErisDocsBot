#!/usr/bin/env sh
SCRIPT_DIR=$(dirname $(readlink -f $0))
VERSIONS=$(node --no-warnings --no-deprecation --experimental-specifier-resolution=node --loader ts-node/esm  $SCRIPT_DIR/get-versions.ts)
for v in $(echo "$VERSIONS" | jq -r '.[]'); do
	/usr/bin/env sh -c "$SCRIPT_DIR/ast-run.sh $v $1"
done
