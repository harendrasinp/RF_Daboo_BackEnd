import express from "express"
import AboutUsController from "./controller.js"
const AboutRouter=express.Router()


AboutRouter.get("/getAboutUsData",AboutUsController.getAboutData)
AboutRouter.post("/aboutUsNewData",AboutUsController.aboutNewData)
AboutRouter.put("/UpdateaboutUsData",AboutUsController.updateaboutData)
AboutRouter.post("/DeleteAboutUsItem",AboutUsController.deleteAboutItem)

export default AboutRouter;