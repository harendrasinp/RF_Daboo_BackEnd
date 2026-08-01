import express from "express"
import Authentication_Controller from "./controller.js"
import authMiddleware from "../../middleware/authMiddleware.js" 


const AuthRouter=express.Router()

AuthRouter.post("/Register",authMiddleware,Authentication_Controller.AdminRegistration)
AuthRouter.post("/Login",Authentication_Controller.AdminLogin)
AuthRouter.post("/Logout",authMiddleware,Authentication_Controller.AdminLogout)
export default AuthRouter