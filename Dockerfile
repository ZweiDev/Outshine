FROM node:10

ENV PORT="1028"
ENV ALERT_KEY="NULL"
ENV ALERT_SECRET="NULL"

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 1028
CMD [ "yarn", "run", "prod" ]
