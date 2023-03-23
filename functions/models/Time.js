import mongoose from "mongoose";
const { Schema } = mongoose;

const TimesSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    desc:{
        type: String,
        required:true
    },
    hours:[{number:Number, unavaliableTimes:{type: [Date]} }],
    // Find out a way to do date times here for the hours.
    
    },{timestamps:true}
);

export default mongoose.model("Times", TimesSchema)