FROM node:16
RUN nginx -c ./config/vue/nginx.conf
WORKDIR /server
COPY . .
RUN npm install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
