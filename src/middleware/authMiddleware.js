import jwt from "jsonwebtoken"

const authMiddleware=(req,res,next)=>{
    try{
        const token=req.cookies?.token
        if(!tokne){
            return res.status(400).json({success:false,message:"access denied"})
        }
        const adminData=jwt.verify(token,"f7tM^3l49I([;(@3")
        req.adminData=adminData
        next()
    }
    catch(error){
        return res.status(401).json({success: false,message: 'Your session is expired'});
    }
}
export default authMiddleware