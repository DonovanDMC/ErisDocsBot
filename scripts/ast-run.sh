#!/usr/bin/env bash
SCRIPT_DIR=$(dirname $(readlink -f $0))

VERSION=$1
[ -z "$VERSION" ] && echo "No Version" && exit 1
touch /tmp/eris-docs/versions/$VERSION.lock
TEMP=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 10)
DIR=/tmp/eris-docs/ast-$TEMP
MODULE_DIR=$DIR/node_modules/eris/lib
echo "Temporary Folder: $DIR"
mkdir -p $DIR
cd $DIR
npm init -y > /dev/null
npm i jsdoc ts-node > /dev/null
ts-node $SCRIPT_DIR/fix-jsdoc.ts $DIR/node_modules
echo "Running Version $VERSION"
mkdir $VERSION
cd $VERSION
if [ "$VERSION" = "0.16.0" ]; then
	npm i DonovanDMC/eris#jsdoc-fix > /dev/null
else
	npm i eris@$VERSION > /dev/null
fi
FILES=$(ls -p $MODULE_DIR | grep -v /)
DIRS=$(ls -p $MODULE_DIR | grep /)
for file in $FILES; do
	echo "[$VERSION] Processing File $file"
	npx jsdoc -X $MODULE_DIR/$file > "${file}on"
	ts-node $SCRIPT_DIR/filter-useless-ast.ts $DIR/$VERSION/${file}on
done
for dir in $DIRS; do
	echo "[$VERSION] Processing Directory $dir"
	mkdir $dir
	FILES2=$(ls -p $MODULE_DIR/$dir | grep -v /)
	for file in $FILES2; do
		echo "[$VERSION] Processing File $dir$file"
		npx jsdoc -X $MODULE_DIR/$dir$file > "$dir${file}on"
	ts-node $SCRIPT_DIR/filter-useless-ast.ts $DIR/$VERSION/$dir${file}on
	done
done
cd $DIR
mkdir -p /tmp/eris-docs/versions
node $SCRIPT_DIR/parse-ast.js $DIR/$VERSION /tmp/eris-docs/versions/$VERSION.json
npm remove eris > /dev/null

rm -rf $DIR /tmp/eris-docs/versions/$VERSION.lock
