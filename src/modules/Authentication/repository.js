import AdminDetail from "./model.js"
import bycript from "bcryptjs"
class AuthenticationRepository {
  // ---------------------------Admin Cheking while registration------------------
  async ChekbyEmail(email) {
    const admin = await AdminDetail.findOne({ email })
    return admin
  }
  // ---------------------------Admin Registration---------------------------------
  async AdminRegistration(adminData) {
    const response = await AdminDetail.create(adminData)
    return response
  }
  // ---------------------Admin Login----------------------------------------------------
  async AdminLogin(email,password){
    const response=await AdminDetail.findOne({email})
    if (!response){
        return null
    }
    const adminData=await bycript.compare(password,response.password)
    if(!adminData){
      return null
    }
    return response
  }
}
export default new AuthenticationRepository()