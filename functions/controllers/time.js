import Time from "../models/Time.js";
import Studio from "../models/Studio.js";
import { createError } from "../utils/error.js";

export const createTime = async (req,res,next) =>{
    const studioId = req.params.studioid;
    const newTime = new Time(req.body)

    try{
        const savedTime = await newTime.save()
        try{
            await Studio.findByIdAndUpdate(studioId, {$push : {hours: savedTime._id},
            });
        }catch(err){
            next(err)
        }
        res.status(200).json(savedTime)
    }catch(err){
        next(err)
    }
};


export const updateTime = async(req,res, next) =>{
    try{
        const updatedTime = await Time.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body}, 
            { new:true}
        );
        res.status(200).json(updateTime)
    }catch(err){
        next(err);
    };
};
export const updateTimeAvailability = async (req, res, next) => {
    try {
      await Time.updateOne(
        { "Time._id": req.params.id },
        {
          $push: {
            "Time.$.unavailableTimes": req.body.dates
          },
        }
      );
      res.status(200).json("Time status has been updated.");
    } catch (err) {
      next(err);
    }
  };

export const deleteTime = async(req,res, next) =>{
    const studioId = req.params.studioid;

    try{
        await Time.findByIdAndDelete(req.params.id);
        try{
            await Studio.findByIdAndUpdate(studioId, {$pull : {hours: req.params.id},
            });
        }catch(err){
            next(err)
        }
        res.status(200).json("Time Deleted")
    }catch(err){
        next(err);
    };
};

export const getTime = async(req,res, next) =>{
    try{
        const time = await Time.findById(
            req.params.id
        );
        res.status(200).json(time)
    }catch(err){
        next(err);
    };
};

export const getallTime = async(req,res, next) =>{
    try{
        const times = await Time.find();
        res.status(200).json(times)
    }catch(err){
        next(err);
    };
};