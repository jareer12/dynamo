FROM node
WORKDIR /client

RUN npm install -g http-server
RUN npm install -g forever

COPY package*.json /client/
RUN npm install

COPY . /client/
RUN npm run build

EXPOSE 8080
RUN http-server dist
# CMD ["forever" "start" "-c" "http-server" "dist" "--port" "4545" "--brotli" "--gzip" "--cors"] 
