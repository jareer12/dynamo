import fs from "fs";
import ejs from "ejs";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import body from "body-parser";
import { basename } from "path";

import InfoRoute from "../routes/info";
import ProxyRoute from "../routes/proxy";
import StorageRoute from "../routes/storage";

dotenv.config();
const app = express();
let __root = __dirname.replace(basename(__dirname), "");

app.use(cors());
app.use(body.json());
app.set("view engine", "ejs");
app.use(body.urlencoded({ extended: true }));

app.use("*", function (req: any, res: any, next: Function) {
  res.success = function (Data: {
    Message: string;
    Success?: boolean;
    Data?: object[] | object;
  }) {
    Data.Success = true;
    res.json(Data);
  };
  res.failure = function (Data: {
    Message: string;
    Success?: boolean;
    Data?: object[] | object;
  }) {
    Data.Success = false;
    res.json(Data);
  };
  next();
});

app.use("/storage", StorageRoute);
app.use("/proxy", ProxyRoute);
app.use("/info", InfoRoute);

app.get("/", function (req: any, res: any) {
  res.success({ Message: "Good" });
});

app.listen(process.env.PORT, function () {
  console.log(
    `Backend Server Instance Available at http://127.0.0.1:${process.env.PORT}`
  );
});
