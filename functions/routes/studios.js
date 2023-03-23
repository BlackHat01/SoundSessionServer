import express from "express";
import{
    createStudio,
    deleteStudio,
    updateStudio,
    getStudio,
    getallStudio,
} from "../controllers/studio.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createStudio);
//update
router.put("/:id",verifyAdmin, updateStudio);
//delete
router.delete("/:id",verifyAdmin, deleteStudio);
//get
router.get("/:id", getStudio);
//getall
router.get("/", getallStudio);

export default router