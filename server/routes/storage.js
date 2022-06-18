"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const sql_1 = __importDefault(require("../plugins/sql"));
const randstr_1 = __importDefault(require("../plugins/randstr"));
dotenv_1.default.config();
let Router = express_1.default.Router();
let __root = __dirname.replace((0, path_1.basename)(__dirname), "");
let MAX_STORAGE_UPLOAD_SIZE = parseFloat(process.env.MAX_STORAGE_UPLOAD_SIZE);
if (!fs_1.default.existsSync(`${__root}/clouds`))
    fs_1.default.mkdirSync(`${__root}/clouds`);
Router.use("*", (0, express_fileupload_1.default)({
    limits: { fileSize: MAX_STORAGE_UPLOAD_SIZE * 1024 * 1024 },
}));
Router.get("/clouds", function (req, res) {
    sql_1.default.getStorageClouds(req.query.limit || 50)
        .then((data) => {
        res.success({ Data: data });
    })
        .catch((err) => {
        res.failure({ Message: "Something went wrong" });
    });
});
Router.get("/:id/:cloud", function (req, res) {
    if (req.params.id) {
        let path = `${__root}/clouds/${req.params.cloud}/${req.params.id}`;
        if (fs_1.default.existsSync(path)) {
            res.sendFile(path);
        }
        else {
            res.failure({ Message: "File not found" });
        }
    }
});
Router.post("/create_cloud", function (req, res) {
    if (req.body.name) {
        sql_1.default.createStorageCloud(`${req.body.name}`)
            .then((data) => {
            res.success({ Data: data });
        })
            .catch((err) => {
            res.failure({ Message: "Something went wrong" });
        });
    }
    else {
    }
});
Router.get("/cloud_files", function (req, res) {
    if (req.body.name) {
        if (fs_1.default.existsSync(`${__root}/clouds/${req.body.name}`)) {
            fs_1.default.readdir(`${__root}/clouds/${req.body.name}`, function (err, files) {
                let data = files.map((file) => ({
                    name: file,
                }));
                res.success({ Data: data });
            });
        }
        else {
            res.failure({
                Message: `Cloud with the name ${req.body.name} does not exist`,
            });
        }
    }
});
Router.post("/upload", function (req, res) {
    if (req.files) {
        let files = req.files;
        let names = Object.keys(files);
        let final = [];
        names.forEach(function (file) {
            let File = files[file];
            let fileID = (0, randstr_1.default)(22);
            File.mv(`${__root}/clouds/${req.body.cloudName}/${fileID}`);
            sql_1.default.storageFileInfo(File.name, File.mimetype, fileID, req.body.cloudName);
            final.push({
                id: fileID,
                pathname: `${req.protocol}://${req.hostname}:${req.app.settings.port || process.env.PORT}/storage/${fileID}`,
            });
        });
        res.success({
            Message: "Uploaded",
            Data: final,
        });
    }
});
exports.default = Router;
