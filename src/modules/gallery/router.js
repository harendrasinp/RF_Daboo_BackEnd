import express from "express"
import { upload } from "../../middleware/multer.Middleware.js"
import galleryController from "../gallery/controller.js"
const GalleryRouter = express.Router()


GalleryRouter.post("/uploadImage",upload.single("image"),galleryController.uploadImage)
GalleryRouter.post("/dropdowItem",galleryController.dropDownItem)
GalleryRouter.get("/getDropDownList",galleryController.getDropDownList)
GalleryRouter.post("/DeleteEvent",galleryController.DeleteEvent)
GalleryRouter.post("/editdropdowItem",galleryController.EditdropdowItem)
GalleryRouter.get("/getImageData",galleryController.getImageData)
GalleryRouter.get("/getYear/:EventName",galleryController.getFunctionYear)
GalleryRouter.post("/getYearImage",galleryController.getYearImage)
GalleryRouter.post("/getEditImages",galleryController.getEditImages)
GalleryRouter.delete("/deleteImage/:imageId",galleryController.deleteImage)
export default GalleryRouter