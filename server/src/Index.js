"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = require("path");
require("../plugins/proxy");
const info_1 = __importDefault(require("../routes/info"));
const proxy_1 = __importDefault(require("../routes/proxy"));
const storage_1 = __importDefault(require("../routes/storage"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const __root = __dirname.replace((0, path_1.basename)(__dirname), "");
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.set("view engine", "ejs");
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("*", function (req, res, next) {
    res.success = function (Data) {
        Data.Success = true;
        res.json(Data);
    };
    res.failure = function (Data) {
        Data.Success = false;
        res.json(Data);
    };
    next();
});
app.use("/storage", storage_1.default);
app.use("/proxy", proxy_1.default);
app.use("/info", info_1.default);
app.get("/", function (req, res) {
    res.success({ Message: "Good" });
});
app.listen(process.env.PORT, function () {
    console.log(`Backend Server Instance Available at http://127.0.0.1:${process.env.PORT}`);
});
