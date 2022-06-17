
import express from "express";
const Router = express.Router();

import DeployMySql from "../docker/deployMySQL";
Router.get("/deploy_mysql", function (req: any, res: any) {
  let Res = DeployMySql({ name: "main" });
});

export default Router;
