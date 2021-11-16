#!/usr/bin/env bash
SCRIPT_DIR=$(dirname $(readlink -f $0))
VERSIONS=$(cat $SCRIPT_DIR/../config.json | jq '.versions')
for v in $(echo "$VERSIONS" | jq -r '.[]'); do
	/usr/bin/env bash -c "$SCRIPT_DIR/ast-run.sh $v"
done
