import express from "express";
const client = express();

client.get("/assets/:name", function (req: any, res: any) {
  console.log(req.params.name);
  res.sendFile(`${__dirname}/dist/assets/${req.params.name}`);
});

client.get("*", function (req: any, res: any) {
  res.sendFile(`${__dirname}/dist/index.html`);
});

client.listen(8085, function () {
  console.log(`Dashboard UI Available on http://127.0.0.1:8085`);
});
