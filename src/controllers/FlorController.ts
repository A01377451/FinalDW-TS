import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from '../models';


class FlorController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static instance : FlorController;
    //Metodo de clase
    public static getInstance():AbstractController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new FlorController("flor");
        return this.instance;
    }


    protected initRoutes(): void {
        this.router.post('/crearFlor', this.postCrearFlor.bind(this));
        this.router.get('/consultarFlores',this.getReadFlores.bind(this));
        this.router.get('/consultarFlor',this.getReadFlor.bind(this))
        this.router.post('/eliminarFlor', this.postEliminarFlor.bind(this));
    } 

    private async postCrearFlor(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Flor.create(req.body);
            console.log("Registro exitoso!");
            res.status(200).send("Registro exitoso!");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }
    
    private async getReadFlores(req:Request,res:Response){
        try{
            console.log("Prueba exitosa")
            const data = await db.Flor.findAll()
            res.status(200).send(data);
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error fatal:"+err);
        }
    }

    private async getReadFlor(req: Request, res: Response) {
        try {
            const data = await db.Flor.findAll({
                where: {
                    id: req.body.id
                }})
            console.log("Consulta exitosa");
            res.status(200).send(data);
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }


    private async postEliminarFlor(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Flor.destroy({
                where: {
                    id: req.body.id
                }});
            console.log("Eliminaste la flor id ", req.body.id);
            res.status(200).send("Registro eliminado");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }
    
}

export default FlorController;