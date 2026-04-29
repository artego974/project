import { Router } from "express";
import { ConvidadosController } from "../controllers/convidadosController";

const routes = Router()
const controller = new ConvidadosController()

routes.get("/list", controller.list.bind(controller))
routes.post("post", controller.create.bind(controller))

export default routes