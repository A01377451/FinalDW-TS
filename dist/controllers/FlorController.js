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
const AbstractController_1 = __importDefault(require("./AbstractController"));
const models_1 = __importDefault(require("../models"));
class FlorController extends AbstractController_1.default {
    //Metodo de clase
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new FlorController("flor");
        return this.instance;
    }
    initRoutes() {
        this.router.post('/crearFlor', this.postCrearFlor.bind(this));
        this.router.get('/consultarFlores', this.getReadFlores.bind(this));
        this.router.get('/consultarFlor', this.getReadFlor.bind(this));
        this.router.post('/eliminarFlor', this.postEliminarFlor.bind(this));
    }
    postCrearFlor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Flor.create(req.body);
                console.log("Registro exitoso!");
                res.status(200).send("Registro exitoso!");
            }
            catch (err) {
                console.log(err);
                res.status(500).send("Error fatal:" + err);
            }
        });
    }
    getReadFlores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Prueba exitosa");
                const data = yield models_1.default.Flor.findAll();
                res.status(200).send(data);
            }
            catch (err) {
                console.log(err);
                res.status(500).send("Error fatal:" + err);
            }
        });
    }
    getReadFlor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield models_1.default.Flor.findAll({
                    where: {
                        id: req.body.id
                    }
                });
                console.log("Consulta exitosa");
                res.status(200).send(data);
            }
            catch (err) {
                console.log(err);
                res.status(500).send("Error fatal:" + err);
            }
        });
    }
    postEliminarFlor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Flor.destroy({
                    where: {
                        id: req.body.id
                    }
                });
                console.log("Eliminaste la flor id ", req.body.id);
                res.status(200).send("Registro eliminado");
            }
            catch (err) {
                console.log(err);
                res.status(500).send("Error fatal:" + err);
            }
        });
    }
}
exports.default = FlorController;
//# sourceMappingURL=FlorController.js.map