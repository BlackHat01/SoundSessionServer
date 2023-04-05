import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import artistsRoute from "./routes/artists.js";
import studiosRoute from "./routes/studios.js";
import timesRoute from "./routes/times.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/users", usersRoute);
app.use("/api/studios", studiosRoute);
app.use("/api/times", timesRoute);
app.use(express.static("./public"));

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT,'0.0.0.0', () => {
  connect();
  console.log("Server is now running.");
});