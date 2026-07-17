import mongoose from "mongoose";

const adminData = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required:true
        },
        role: {
            type: String,
            default: "admin"
        }
    },
    { timestamps: true }
)

const AdminDetail=mongoose.model("Admin",adminData)

export default AdminDetail;