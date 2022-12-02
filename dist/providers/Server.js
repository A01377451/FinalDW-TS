"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express= require('express'); //NodeJS
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("../models"));
class Server {
    //Metodo constructor
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
        this.routes(appInit.controllers);
        this.connectDB();
    }
    //Cargar los middlewares
    loadMiddlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.default.sequelize.sync();
        });
    }
    routes(controllers) {
        //Ruta auxiliar para verificar el funcionamiento de la app
        this.app.get('/', (_, res) => {
            res.status(200).send({
                message: "The backend modulo is working",
                documentation: 'http://github.com'
            });
        });
        controllers.forEach((controller) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log(`Server: Running @'http://localhost:${this.port}'`);
            });
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map