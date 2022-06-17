FROM node:16.13.1
COPY . .

RUN npm i -g http-server
RUN npm install

RUN npm run build
RUN http-server ./dist --port 3000

EXPOSE 3000
