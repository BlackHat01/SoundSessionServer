import dotenv from "dotenv"
import mongoose from "mongoose";
import firebasefunctions from "firebase-functions";
import express from "express";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import studiosRoute from "./routes/studios.js";
import datesRoute from "./routes/dates.js";
const app = express();
dotenv.config()
const port = 8088;
const time = 17.35;

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.app = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});

//middleware

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/studios", studiosRoute);
app.use("/api/dates", datesRoute);

app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Sorry, Something Went Wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});

app.get("/", (req, res) => {
    res.send("What's Up My Lady")
})

app.listen(port, () => {
    connect()
    console.log("Server started on port:" + port)
});