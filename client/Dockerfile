FROM node:16.13.1

COPY . .

RUN npm install
RUN npm run build

RUN ls

FROM python3
RUN python3 -m http.server 3000
EXPOSE 3000