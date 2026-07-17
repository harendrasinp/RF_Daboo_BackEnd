import mongoose from "mongoose";

const AboutUsData = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    discription: {
        type: String,
        required: true,
        trim: true
    }
},
    { timestamps: true }
)
const aboutUsModel=mongoose.model("AboutUS",AboutUsData)
export default aboutUsModel