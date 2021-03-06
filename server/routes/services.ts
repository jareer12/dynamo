import express from "express";
import DB from "../plugins/sql";
const Router = express.Router();

Router.get("/all", function (req: any, res: any) {
  DB.getServices(parseInt(req.query.limit) || 500)
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

Router.get("/get:/id", function (req: any, res: any) {
  DB.getServiceById(req.params.id)
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

Router.post("/create", function (req: any, res: any) {
  DB.createService(req.body.name, req.body.slug, req.body.port)
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

export default Router;
