FROM node

RUN npm install -g http-server
RUN npm install -g forever

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

RUN npm run build

EXPOSE 8080
# CMD ["forever" "start" "-c" "http-server" "dist" "--port" "4545" "--brotli" "--gzip" "--cors"] 
CMD ["http-server" "dist"]