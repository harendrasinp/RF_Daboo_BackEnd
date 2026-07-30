import mongoose from "mongoose";

const ContactUsData= new mongoose.Schema({
     Address: {
        type: String,
        required: true,
        trim: true
    },
    OfficePhone: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true
    },
})
const ContactUsModel=new mongoose.model("ContactUs",ContactUsData)
export default ContactUsModel