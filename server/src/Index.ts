import dotenv from "dotenv";
import express from "express";
import ProxyRoute from "../routes/proxy";
import ReverseProxy from "../plugins/ReverseProxy";

dotenv.config();
ReverseProxy.start();

const app = express();

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

app.use("/proxy", ProxyRoute);
app.get("/", function (req: any, res: any) {
  res.success({ Message: "Good" });
});

app.listen(process.env.PUBLIC_PORT, function () {
  console.log(
    `Backend Server Instance Available at http://127.0.0.1:${process.env.PUBLIC_PORT}`
  );
});
