FROM node:16.13.1
WORKDIR /backend

COPY ./server .
RUN ls

RUN npm install
CMD ["npm", "run", "start"]

FROM nginx
COPY ./config/node/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 7000 3000