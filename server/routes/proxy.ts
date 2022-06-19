import DB from "../plugins/sql";
import express from "express";
const Router = express.Router();

Router.get("/", function (req: any, res: any) {
  res.success({ Message: "200 - Okay" });
});

Router.get("/all", function (req: any, res: any) {
  DB.getReverseProxies(req.query.limit || 50)
    .then((data) => {
      res.success({ Data: data });
    })
    .catch((err) => {
      res.failure({ Message: "something went wrong" });
    });
});

Router.get("/get", function (req: any, res: any) {
  DB.getReverseProxyById(req.query.id)
    .then((data) => {
      res.success({ Data: data });
    })
    .catch((err) => {
      res.failure({ Message: "something went wrong" });
    });
});

Router.post("/create", function (req: any, res: any) {
  if (req.body.name) {
    if (req.body.target) {
      if (req.body.targetPort) {
        if (req.body.host) {
          if (req.body.port) {
            const name = req.body.name;
            const host = req.body.host;
            const port = req.body.port;
            const target = req.body.target;
            const targetPort = req.body.targetPort;
            DB.createReverseProxy(name, target, targetPort, host, port)
              .then((data) => {
                res.success({ Data: data });
              })
              .catch((err) => {
                res.failure({
                  Message: `Unable to create reverse proxy ${err}`,
                });
              });
          }
        }
      }
    }
  }
});

export default Router;
