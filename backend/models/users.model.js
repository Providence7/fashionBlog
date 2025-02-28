import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema  = new Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    img : {
        type : String,
    },
    savedposts : {
        type : [String],
        default : []
    },


},{timestamps : true})

export default mongoose.model("Users", userSchema)