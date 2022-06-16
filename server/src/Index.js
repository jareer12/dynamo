"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const proxy_1 = __importDefault(require("../routes/proxy"));
const ReverseProxy_1 = __importDefault(require("../plugins/ReverseProxy"));
dotenv_1.default.config();
ReverseProxy_1.default.start();
const app = (0, express_1.default)();
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
app.use("/proxy", proxy_1.default);
app.get("/", function (req, res) {
    res.success({ Message: "Good" });
});
app.listen(process.env.PUBLIC_PORT, function () {
    console.log(`Backend Server Instance Available at http://127.0.0.1:${process.env.PUBLIC_PORT}`);
});
