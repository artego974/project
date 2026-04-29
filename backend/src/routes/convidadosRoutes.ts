import { Router } from "express";
import { ConvidadosController } from "../controllers/ConvidadosController";

const routes = Router()
const controller = new ConvidadosController()

routes.get("/list", controller.list.bind(controller))
routes.get("/listBy",controller.listByName.bind(controller))
routes.post("/create", controller.create.bind(controller))
routes.put("/update/:id", controller.update.bind(controller))
routes.delete("/delete/:id", controller.delete.bind(controller))

export default routes