FROM node:16-alpine

WORKDIR /app
COPY . .
RUN apk add lsof
RUN echo -e "update-notifier=false\nloglevel=error" > ~/.npmrc
RUN npm --no-update-notifier install --development
CMD npm run start
