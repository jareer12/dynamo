import fetch from "node-fetch";
import express from "express";
const ProxyManager = express();

declare interface ProxyInstance {
  host: string;
  port: number;
  scheme: string;
}

class ReverseProxy {
  Instances: ProxyInstance[];
  constructor() {
    this.Instances = [
      { scheme: "http", host: "home.jubot.site", port: 7000 },
      { scheme: "http", host: "root.jubot.site", port: 3000 },
    ];
  }
  start() {
    ProxyManager.listen(process.env.REVERSE_PROXY_PORT, function () {
      console.log(
        `Reverse Proxy Started at http://localhost:${process.env.REVERSE_PROXY_PORT}`
      );
    });
  }
  restart() {
    console.log(`Restarting proxy`);
  }
}

const Proxy = new ReverseProxy();
ProxyManager.use("*", function (req: any, res: any, next: Function) {
  console.log(req.host);
  Proxy.Instances.forEach((server) => {
    if (server.host == req.hostname) {
      try {
        delete req.headers.host;
        let FetchURL: string = `${server.scheme}://${process.env.SERVER_IP_ADDRESS}:${server.port}${req.path}`;
        fetch(FetchURL, {
          body: req.body,
          method: req.method,
          headers: req.headers,
        })
          .then((response: any) => response.text())
          .then((data: any) => {
            res.end(data);
          })
          .catch((err) => {
            res.failure({ Message: "Internal Server Error" });
          });
      } catch {
        res.failure({ Message: "Internal Server Error" });
      }
    }
  });
});

export default Proxy;
