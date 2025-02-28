import mongoose, { Schema } from "mongoose";


const postSchema  = new Schema({
    user :{
        type : Schema.Types.ObjectId,
        require : true,
        ref : "User"
    },
    img : {
        type : String,
    },
    title : {
        type : String,
        require : true,
    },
    slug : {
        type : String,
        require : true,
        unique : true
    },
    content : {
        type : String,
        require : true
    },
    desc : {
        type : String,
    },
    visit : {
        type : Number,
        default : 0
    },


},{timestamps : true})

export default mongoose.model('Post', postSchema)