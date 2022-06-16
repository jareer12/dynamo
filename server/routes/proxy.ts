import express from "express";
const Router = express.Router();

Router.get("/", function (req: any, res: any) {
  res.success({ Message: "Proxies Working" });
});

export default Router;
