import mongoose from "mongoose";

const galleryData= new mongoose.Schema({
    EventName:{
        type:String,
        required:true,
        trim:true
    },
    Year:{
        type:Number,
        required:true,
        trim:true
    },
    Image:{
        type:String,
        required:true,
        trim:true
    },
    cloudinary_id:{
        type:String,
        required:true,
        trim:true
    }
},
  { timestamps: true }
)
const galleryModel= mongoose.model("gallery",galleryData)
export default galleryModel