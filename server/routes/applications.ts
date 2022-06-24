import express from "express";
import DB from "../plugins/sql";
const Router = express.Router();

Router.get("/all", function (req: any, res: any) {
  DB.getApplications(parseInt(req.query.limit) || 500)
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

Router.get("/get:/id", function (req: any, res: any) {
  DB.getApplicationById(req.params.id)
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

Router.post("/create", function (req: any, res: any) {
  DB.createApplication(
    req.body.name,
    req.body.service,
    req.body.git,
    req.body.runCommand,
    req.body.buildCommand
  )
    .then((data: object) => {
      res.success({ Data: data });
    })
    .catch((err: string) => {
      res.failure({ Message: `Couldn't create application ${err}` });
    });
});

export default Router;
