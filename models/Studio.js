import mongoose from "mongoose";
const { Schema } = mongoose;

const StudiosSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    image:{
        type: [String],
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    hours:{
        type: [String],
    },
    price:{
        type: Number,
        required:true
    },
    featured:{
        type: Boolean,
        default:false
    },
});

export default mongoose.model("Studios", StudiosSchema)