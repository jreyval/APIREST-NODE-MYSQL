import express from "express"
import morgan from "morgan"
import cors from "cors"

//Routes
import LanguageRoutes from "./routes/language.routes"

const app = express()

//Settings
app.set("port", 4000)

//Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

//Routes
app.use("/api/languages",LanguageRoutes)

export default app;