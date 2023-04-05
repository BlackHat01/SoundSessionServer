import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:false
    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    type:{
        type: String,
        required:true
    },
    image:{
        type: [String],
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
    distance:{
        type: String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("Artist", ArtistSchema)