"use strict";
//Combinación de los archivos de la carpeta routes y controllers
//un proyecto en nodejs
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AbstractController {
    get prefix() {
        return this._prefix;
    }
    get router() {
        return this._router;
    }
    constructor(prefix) {
        this._router = (0, express_1.Router)();
        this._prefix = prefix;
        this.initRoutes();
    }
}
exports.default = AbstractController;
//# sourceMappingURL=AbstractController.js.map