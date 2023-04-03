import express from "express";
import{
    createStudio,
    deleteStudio,
    updateStudio,
    getStudio,
    getallStudio,
    countByType,
    getStudioTimes,
    countByEngineerType
} from "../controllers/studio.js";
import Studio from "../models/Studio.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createStudio);
//update
router.put("/:id",verifyAdmin, updateStudio);
//delete
router.delete("/:id",verifyAdmin, deleteStudio);
//get
router.get("/find/:id", getStudio);
//getall
router.get("/", getallStudio);

// POTENTIALLY CHANGE THIS TO AUDIO ENGINEER TYPE
router.get("/countByType", countByType);
router.get("/countByEngineerType", countByEngineerType);
router.get("/time/:id", getStudioTimes);


export default router