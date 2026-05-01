import express from "express"
import { AppDataSource } from "./config/data-source"
import routes from "./routes/index"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors({origin:["http://localhost:5173","http://localhost:3000"]}))

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    app.use(routes)
    app.listen(port, ()=>{
        console.log("server rodando na porta",port)
    })
})