FROM node:16
WORKDIR /backend

COPY ./server .
RUN npm install -g npm@8.12.2
RUN ls

RUN npm install
CMD ["node", "./src/index.js"]

EXPOSE 7000
