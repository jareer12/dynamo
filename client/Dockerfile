FROM node

RUN npm install -g http-server
RUN npm install -g forever

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

RUN npm run build

# CMD ["forever" "start" "-c" "http-server" "dist" "--port" "4545" "--brotli" "--gzip" "--cors"] 
CMD ["http-server" "dist" "--port" "4545"]
EXPOSE 4545
