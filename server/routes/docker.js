"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const deployMySQL_1 = __importDefault(require("../docker/deployMySQL"));
Router.get("/deploy_mysql", function (req, res) {
    let Res = (0, deployMySQL_1.default)({ name: "main" });
});
exports.default = Router;
