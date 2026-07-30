import express from "express"
import ContactController from "../contact/controller.js"

const ContactRouter=express.Router()

ContactRouter.get("/getContactUs",ContactController.getContactUs)
ContactRouter.get("/getPhones",ContactController.getPhones)
ContactRouter.get("/getAllPhoneNoList",ContactController.getAllPhoneNoList)
ContactRouter.post("/ContactUsData",ContactController.contacUstData)
ContactRouter.post("/ContactData",ContactController.contactData)
ContactRouter.post("/DeletePhoneFromList",ContactController.DeletePhoneFromList)
ContactRouter.post("/UpdatePhoneList",ContactController.UpdatePhoneList)

export default ContactRouter