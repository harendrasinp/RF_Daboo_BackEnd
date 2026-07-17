import mongoose from "mongoose";


const DropDownListItem=new mongoose.Schema({
    DropDownItem:{
        type:String,
        required:true,
        trim:true
    }
})
const DropDownitemModel=mongoose.model("dropdown",DropDownListItem)
export default DropDownitemModel