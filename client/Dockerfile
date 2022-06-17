FROM alpine:3.13.2

RUN apt install thttpd

COPY . .

RUN npm install
RUN npm run build

RUN ls

CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/dist", "-u", "static", "-l", "-", "-M", "60"]
