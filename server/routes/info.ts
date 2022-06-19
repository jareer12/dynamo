import os from "os";
import express from "express";
const Router = express.Router();

Router.get("/", function (req: any, res: any) {
  let heap: number = os.freemem();
  let heapTotal: number = os.totalmem();
  let percentUsed: number = (heap * 100) / heapTotal;
  res.success({
    Message: "Information",
    Data: {
      Uptime: os.uptime(),
      CPU: os.cpus(),
      Memory: {
        used: heapTotal - heap,
        total: heapTotal,
        free: heap,
        precent: {
          used: percentUsed,
          left: 100 - percentUsed,
        },
      },
    },
  });
});

export default Router;
