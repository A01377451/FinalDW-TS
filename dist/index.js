"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./providers/Server"));
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const FlorController_1 = __importDefault(require("./controllers/FlorController"));
const app = new Server_1.default({
    port: config_1.PORT,
    env: config_1.NODE_ENV,
    middlewares: [
        express_1.default.json(),
        express_1.default.urlencoded({ extended: true }),
        (0, cors_1.default)()
    ],
    controllers: [
        FlorController_1.default.getInstance()
    ]
});
app.init();
//# sourceMappingURL=index.js.map