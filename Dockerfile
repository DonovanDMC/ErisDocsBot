FROM node:16-alpine

WORKDIR /app
RUN apk add lsof
RUN echo -e "update-notifier=false\nloglevel=error\nnode-linker=hoisted" > ~/.npmrc
RUN npm install --no-save pnpm
COPY package.json pnpm-lock.yaml ./
RUN npx pnpm install  --frozen-lockfile
COPY . .
CMD ["node", "--no-warnings", "--no-deprecation", "--experimental-specifier-resolution=node", "--loader", "ts-node/esm", "src/index.ts"]
