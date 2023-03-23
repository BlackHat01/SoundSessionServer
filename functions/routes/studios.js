import express from "express";
import{
    createStudio,
    deleteStudio,
    updateStudio,
    getStudio,
    getallStudio,
} from "../controllers/studio.js";

const router = express.Router();

//create
router.post("/", createStudio);
//update
router.put("/:id", updateStudio);
//delete
router.delete("/:id", deleteStudio);
//get
router.get("/:id", getStudio);
//getall
router.get("/", getallStudio);

export default router