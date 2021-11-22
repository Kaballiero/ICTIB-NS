FROM node:14.18-alpine

RUN apk update && apk add --update git python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200
EXPOSE 4400
EXPOSE 5000

CMD [ "npm", "start" ]