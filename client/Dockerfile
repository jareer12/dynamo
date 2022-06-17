FROM node:16.13.1

COPY package*.json ./
RUN npm i -g http-server

RUN npm install
COPY . .

RUN npm run build
CMD [ "http-server", "/dist" ]
EXPOSE 3000
