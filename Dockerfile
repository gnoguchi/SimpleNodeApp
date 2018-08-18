from node:8

USER root 

RUN mkdir -p /usr/src/simple-node-app

WORKDIR /usr/src/simple-node-app

RUN npm i -g pm2

COPY package.json /usr/src/simple-node-app

COPY . /usr/src/simple-node-app

RUN npm i

CMD npm run prod

