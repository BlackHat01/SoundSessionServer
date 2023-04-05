import express from "express";
import{
    createArtist,
    deleteArtist,
    updateArtist,
    getArtist,
    getallArtist,
    countByType,
    getArtistTimes,
    getFeatured,
    countByEngineerType
} from "../controllers/artist.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createArtist);
//update
router.put("/:id", verifyAdmin, updateArtist);
//delete
router.delete("/:id",verifyAdmin, deleteArtist);
//get
router.get("/find/:id", getArtist);
//getall
router.get("/", getallArtist);

// POTENTIALLY CHANGE THIS TO AUDIO ENGINEER TYPE
router.get("/countByType", countByType);
router.get("/countByEngineerType", countByEngineerType);
router.get("/time/:id", getArtistTimes);
router.get("/featured", getFeatured);


export default router