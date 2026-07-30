import ContactResponse from "./response.js"
class ContactController{
    async getContactUs(req,res){
        try{
            const response=await ContactResponse.getContactUs()
            return res.status(200).json({success:true,data:response})

        }catch(error){
            return res.status(400).json({success:false,message:error.message})
        }
    }
    async getPhones(req,res){
        try{
            const response=await ContactResponse.getPhones()
            return res.status(200).json({success:true,data:response})

        }catch(error){
            return res.status(400).json({success:false,message:error.message})
        }
    }
    async getAllPhoneNoList(req,res){
        try{
            const response=await ContactResponse.getPhones()
            return res.status(200).json({success:true,data:response})

        }catch(error){
            return res.status(400).json({success:false,message:error.message})
        }
    }
    async contacUstData(req,res){
        try{
            const {Address,OfficePhone,Email}=req.body
            const response=await ContactResponse.ContactData({Address,OfficePhone,Email})
            return res.status(200).json({success:true,message:"Contact updated Successfuly.....",data:response})

        }catch(error){
            return res.status(400).json({success:false,message:error.message})
        }
    }
    async contactData(req,res){
        try{
            const {OfficeName,Contact}=req.body
            console.log(OfficeName,Contact)
            const response=await ContactResponse.contactRepo({OfficeName,Contact})
            return res.status(200).json({success:true,data:response,message:"Contact Added Successfuly..."})
        }catch(error){
            return res.status(400).json({success:false,message:error.message})
        }
    }
     async DeletePhoneFromList(req, res) {
            try {
                const { phoneId } = req.body
                const response = await ContactResponse.DeletePhoneFromList(phoneId)
                return res.status(200).json({
                    success: true,
                    message: "Phone Number deleted Successfully"
                });
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        }
        async UpdatePhoneList(req,res){
            try{
                const {id,OfficeName,Contact}=req.body
                const response=await ContactResponse.UpdatePhoneList(id,OfficeName,Contact)
                return res.status(200).json({success:true,message:"Conatct Updated Successfuly"})
            }catch(error){
                return res.status(400).json({success:true,message:"Somthing went wrong"})
            }
        }
}
export default new ContactController()