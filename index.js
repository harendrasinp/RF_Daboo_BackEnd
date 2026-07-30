import express from "express"
import cors from "cors"
import AuthRouter from "./src/modules/Authentication/routers.js"
import AboutRouter from "./src/modules/aboutUs/router.js"
import GalleryRouter from "./src/modules/gallery/router.js"
const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.31.136:3000','https://r-f-daboo-frontend.vercel.app/'],
    credentials: true
})) 

app.use(express.json());

app.use("/admin",AuthRouter)
app.use("/admin",AboutRouter)
app.use("/admin",GalleryRouter)


export default app