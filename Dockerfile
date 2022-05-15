FROM node:16-alpine

WORKDIR /app
COPY . .
RUN npm --no-update-notifier install --development
CMD npm run start
