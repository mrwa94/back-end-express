"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("./config/server");
const dbconfig_1 = require("./config/dbconfig");
const app = (0, express_1.default)();
const PORT = server_1.dev.app.port;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
    (0, dbconfig_1.connectDB)();
});
app.get("/");
