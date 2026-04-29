import { Router } from "express";
import convidadosRoutes from "./convidadosRoutes"

const routes = Router()

routes.use("/convidados", convidadosRoutes )

export default routes