FROM node:lts-alpine3.9

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --no-optional
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
