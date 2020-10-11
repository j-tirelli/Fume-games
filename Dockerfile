FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run installAll

RUN npm run build

EXPOSE 3003

CMD [ "node", "server/index.js" ]