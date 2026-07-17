import AboutUsRepositori from "./repository.js"

class AboutUsController {
    async aboutNewData(req, res) {
        try {
            const { title, discription } = req.body
             if(!title || !discription){
                return res.status(401).json({success:false,message:"All fields are required"})
             }
           
            const response = await AboutUsRepositori.newAboutData({ title, discription })
            return res.status(201).json({
                success: true,
                data: response
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    async getAboutData(re, res) {
        try {
            const response = await AboutUsRepositori.getAboutData()
            if (!response) {
                return res.status(400).json({ success: false, message: "No Data Found" })
            }
            return res.status(200).json({ success: true, ResponseData: response })
        } catch (error) {
            return error.message
        }
    }
    async updateaboutData(req,res){
        try{
            const{id,data}=req.body
            const response =await AboutUsRepositori.EditAboutData(id,data)
            return res.status(201).json({success:true,message:"Update successfull"})
        }
        catch(error){
            return error.message
        }
    }
    async deleteAboutItem(req, res) {
        try {
            const { Id } = req.body
            const response = await AboutUsRepositori.deleteItem(Id)
            return res.status(200).json({
                success: true,
                message: "Item deleted successfully"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}
export default new AboutUsController()