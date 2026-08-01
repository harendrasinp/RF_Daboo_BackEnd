import express from "express"
import { upload } from "../../middleware/multer.Middleware.js"
import galleryController from "../gallery/controller.js"
import authMiddleware from "../../middleware/authMiddleware.js"
const GalleryRouter = express.Router()


GalleryRouter.get("/getImageData",galleryController.getImageData)
GalleryRouter.get("/getDropDownList",galleryController.getDropDownList)
GalleryRouter.get("/getYear/:EventName",galleryController.getFunctionYear)

GalleryRouter.post("/uploadImage",upload.single("image"),authMiddleware,galleryController.uploadImage)
GalleryRouter.post("/dropdowItem",authMiddleware,galleryController.dropDownItem)
GalleryRouter.post("/DeleteEvent",authMiddleware,galleryController.DeleteEvent)
GalleryRouter.post("/editdropdowItem",authMiddleware,galleryController.EditdropdowItem)
GalleryRouter.post("/getYearImage",authMiddleware,galleryController.getYearImage)
GalleryRouter.post("/getEditImages",authMiddleware,galleryController.getEditImages)
GalleryRouter.delete("/deleteImage/:imageId",authMiddleware,galleryController.deleteImage)
export default GalleryRouter