
import express from "express"
import { AppDataSource } from "./config/data-source"
import routes from "./routes/convidadosRoutes"

const app = express()
const port = 3000

app.use(express.json())

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    app.use(routes)
    app.listen(port, ()=>{
        console.log("server rodando na porta",port)
    })
})