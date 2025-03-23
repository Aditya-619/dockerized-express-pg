FROM node:18

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . /src

EXPOSE 5001

CMD [ "node", "src/index.js" ]
