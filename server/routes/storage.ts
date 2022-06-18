import fs from "fs";
import dotenv from "dotenv";
import express from "express";
import { basename } from "path";
import fileUpload from "express-fileupload";

import DB from "../plugins/sql";
import randStr from "../plugins/randstr";

dotenv.config();

let Router = express.Router();
let __root = __dirname.replace(basename(__dirname), "");
let MAX_STORAGE_UPLOAD_SIZE: number = parseFloat(
  process.env.MAX_STORAGE_UPLOAD_SIZE
);

if (!fs.existsSync(`${__root}/clouds`)) fs.mkdirSync(`${__root}/clouds`);

Router.use(
  "*",
  fileUpload({
    limits: { fileSize: MAX_STORAGE_UPLOAD_SIZE * 1024 * 1024 },
  })
);

Router.get("/clouds", function (req: any, res: any) {
  DB.getStorageClouds(req.query.limit || 50)
    .then((data) => {
      res.success({ Data: data });
    })
    .catch((err) => {
      res.failure({ Message: "Something went wrong" });
    });
});

Router.get("/:id/:cloud", function (req: any, res: any) {
  if (req.params.id) {
    let path: string = `${__root}/clouds/${req.params.cloud}/${req.params.id}`;
    if (fs.existsSync(path)) {
      res.sendFile(path);
    } else {
      res.failure({ Message: "File not found" });
    }
  }
});

Router.post("/create_cloud", function (req: any, res: any) {
  if (req.body.name) {
    DB.createStorageCloud(`${req.body.name}`)
      .then((data) => {
        res.success({ Data: data });
      })
      .catch((err) => {
        res.failure({ Message: "Something went wrong" });
      });
  } else {
  }
});

Router.get("/cloud_files", function (req: any, res: any) {
  if (req.body.name) {
    if (fs.existsSync(`${__root}/clouds/${req.body.name}`)) {
      fs.readdir(`${__root}/clouds/${req.body.name}`, function (err, files) {
        let data = files.map((file) => ({
          name: file,
        }));
        res.success({ Data: data });
      });
    } else {
      res.failure({
        Message: `Cloud with the name ${req.body.name} does not exist`,
      });
    }
  }
});

Router.post("/upload", function (req: any, res: any) {
  if (req.files) {
    let files = req.files;
    let names = Object.keys(files);
    let final: any[] = [];
    names.forEach(function (file: string) {
      let File = files[file];
      let fileID = randStr(22);
      File.mv(`${__root}/clouds/${req.body.cloudName}/${fileID}`);
      DB.storageFileInfo(File.name, File.mimetype, fileID, req.body.cloudName);
      final.push({
        id: fileID,
        pathname: `${req.protocol}://${req.hostname}:${
          req.app.settings.port || process.env.PORT
        }/storage/${fileID}`,
      });
    });
    res.success({
      Message: "Uploaded",
      Data: final,
    });
  }
});

export default Router;
