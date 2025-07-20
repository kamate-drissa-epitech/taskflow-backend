import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.routes";

dotenv.config()

const app = express()
const PORT : number  = Number(process.env.PORT) || 5000

app.use(cors())
app.use(express.json())


app.use('/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})








