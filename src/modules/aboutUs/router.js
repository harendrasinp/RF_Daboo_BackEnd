import express from "express"
import AboutUsController from "./controller.js"
import authMiddleware from "../../middleware/authMiddleware.js"
const AboutRouter=express.Router()


AboutRouter.get("/getAboutUsData",AboutUsController.getAboutData)

AboutRouter.post("/aboutUsNewData",authMiddleware,AboutUsController.aboutNewData)
AboutRouter.put("/UpdateaboutUsData",authMiddleware,AboutUsController.updateaboutData)
AboutRouter.post("/DeleteAboutUsItem",authMiddleware,AboutUsController.deleteAboutItem)

export default AboutRouter;