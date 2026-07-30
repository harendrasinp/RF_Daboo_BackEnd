import mongoose from "mongoose";

const ContactsData=new mongoose.Schema({
    OfficeName:{
        type: String,
        required: true,
        trim: true
    },
    ContactNumber:{
        type:String,
        required: true,
        trim: true
    },

},{ timestamps: true })
const ContactModel=new mongoose.model("Contacts",ContactsData)
export default ContactModel

 