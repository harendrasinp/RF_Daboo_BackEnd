import AuthenticationRepository from "./repository.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
class Authentication_Controller {
// ---------------------------------------------------Admin Registration---------------------------------
    async AdminRegistration(req, res) {
        try {
            const { username, password, email, } = req.body

            const response = await AuthenticationRepository.ChekbyEmail(email)
            if (response) {
                return res.status(400).json({ success: false, message: "something went wrong" })
            }

            const hashedpasword = await bcrypt.hash(password, 10)

            const RegisterdeAdmin = await AuthenticationRepository.AdminRegistration({ username, email, password: hashedpasword })

            if (!RegisterdeAdmin) {
                return res.status(400).json({ message: "Failed to register admin" })
            }
            return res.status(200).json({ success: true, adminData: RegisterdeAdmin })

        }
        catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
// -------------------------------------Admin Login----------------------------------------------------------
    async AdminLogin(req, res) {
        try {
            const { email, password } = req.body
            const responseData = await AuthenticationRepository.AdminLogin(email, password)
            if (!responseData) {
                return res.status(402).json({ success: false, message: "Something went wrong" })
            }
            const token = jwt.sign({ name: responseData.username, emial: responseData.email },
                "f7tM^3l49I([;(@3",
                { expiresIn: "1hr" })
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,  // it is for local host
                // secure: false // it is for https
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })
            return res.status(200).json({ success: true, message: "Login Successful", responseData })


        }
        catch (error) {
            return error.message
        }
    }
// -----------------------------Admin Logout----------------------------------------------------------------
    async AdminLogout(req, res) {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    }

}
export default new Authentication_Controller()