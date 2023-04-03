import express from "express";
import{
    createTime,
    deleteTime,
    updateTime,
    getTime,
    getallTime,
    updateTimeAvailability,
} from "../controllers/time.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:studioid", verifyAdmin, createTime);
//update
router.put("/availability/:id", updateTimeAvailability);
router.put("/:id",verifyAdmin, updateTime);
//delete
router.delete("/:id/:studioid",verifyAdmin, deleteTime);
//get
router.get("/:id", getTime);
//getall
router.get("/", getallTime);

export default router;