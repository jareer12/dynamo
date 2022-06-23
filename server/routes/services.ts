import DB from "../plugins/sql";
import express from "express";
const Router = express.Router();

Router.get("/", function (req: any, res: any) {
  res.success({ Message: "200 - Okay" });
});

Router.get("/all", function (req: any, res: any) {});

export default Router;
