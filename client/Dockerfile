FROM node:lts-alpine

RUN npm install --location=global http-server
COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build
CMD [ "http-server", "dist" ]
EXPOSE 3000
