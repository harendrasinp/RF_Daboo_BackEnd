import express from "express"
import ContactController from "../contact/controller.js"
import authMiddleware from "../../middleware/authMiddleware.js"
const ContactRouter=express.Router()

ContactRouter.get("/getContactUs",ContactController.getContactUs)
ContactRouter.get("/getPhones",ContactController.getPhones)
ContactRouter.get("/getAllPhoneNoList",ContactController.getAllPhoneNoList)
ContactRouter.post("/ContactUsData",authMiddleware,ContactController.contacUstData)
ContactRouter.post("/ContactData",authMiddleware,ContactController.contactData)
ContactRouter.post("/DeletePhoneFromList",authMiddleware,ContactController.DeletePhoneFromList)
ContactRouter.post("/UpdatePhoneList",authMiddleware,ContactController.UpdatePhoneList)

export default ContactRouter