"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
Router.get("/", function (req, res) {
    let heap = os_1.default.freemem();
    let heapTotal = os_1.default.totalmem();
    let percentUsed = (heap * 100) / heapTotal;
    res.success({
        Message: "Information",
        Data: {
            Uptime: os_1.default.uptime(),
            CPU: os_1.default.cpus(),
            Memory: {
                used: heap,
                total: heapTotal,
                free: heapTotal - heap,
                precent: {
                    used: percentUsed,
                    left: 100 - percentUsed,
                },
            },
        },
    });
});
exports.default = Router;
