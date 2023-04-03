import express from "express";
import{
    deleteUser,
    updateUser,
    getUser,
    getallUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentification", verifyToken, (req,res,next) =>{
//     res.send("Hello User, You are Logged In.")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next) =>{
//     res.send("Hello User, You are Logged In and Can Delete Your Account.")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) =>{
//     res.send("Hello Admin, You are Logged In and Can Delete All Accounts.")
// })
//update
router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//get
router.get("/:id",verifyUser, getUser);
//getall
router.get("/",verifyAdmin, getallUser);

export default router