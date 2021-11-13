FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

COPY ./dist ./dist

EXPOSE 4200

CMD [ "npm", "start" ]