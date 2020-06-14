FROM node:alpine

RUN mkdir -p /app/contacts-app

WORKDIR /app/contacts-app

COPY ./package.json .
RUN npm install

COPY . .
RUN ls ./

RUN ./node_modules/.bin/ng build --prod 
RUN ./node_modules/.bin/ng build --prod api

RUN npm i -g http-server tslib

