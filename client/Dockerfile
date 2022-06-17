FROM node:14.18-alpine as build-stage

COPY . .

RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/sites-enabled/default

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 8080