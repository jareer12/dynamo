FROM alpine:3.13.2

RUN apt install thttpd

RUN adduser -D static
USER static

COPY . .

RUN npm install
RUN npm run build

CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/dist", "-u", "static", "-l", "-", "-M", "60"]
