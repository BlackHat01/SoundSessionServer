import Studio from "../models/Studio.js";
import Time from "../models/Time.js";

export const createStudio = async(req,res, next) =>{
    const newStudio = new Studio(req.body)

    try{
        const savedStudio = await newStudio.save();
        res.status(200).json(savedStudio);
    }catch(err){
        next(err);
    };
}

export const updateStudio = async(req,res, next) =>{
    try{
        const updatedStudio = await Studio.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body}, 
            { new:true}
        );
        res.status(200).json(updatedStudio)
    }catch(err){
        next(err);
    };
}

export const deleteStudio = async(req,res, next) =>{
    try{
        await Studio.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Studio Deleted")
    }catch(err){
        next(err);
    };
}

export const getStudio = async(req,res, next) =>{
    try{
        const studio = await Studio.findById(
            req.params.id
        );
        res.status(200).json(studio)
    }catch(err){
        next(err);
    };
}

export const getallStudio = async(req,res, next) =>{
    try{
        const studios = await Studio.find();
        res.status(200).json(studios)
    }catch(err){
        next(err);
    };
}

export const countByType = async(req,res, next) =>{
    const types = req.query.types.split(",")
    try{
        const list = await Promise.all(types.map(type=>{
            return Studio.countDocuments({type:type})
        }))
        res.status(200).json(list)
    }catch(err){
        next(err);
    };
}

export const countByEngineerType = async (req, res, next) => {
    try {
        //CHANGE TO DIFFERENT TYPES OF ENGINEERS
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };
  
  export const getStudioTimes = async (req, res, next) => {
    try {
      const studio = await Studio.findById(req.params.id);
      const list = await Promise.all(
        studio.times.map((time) => {
          return Time.findById(time);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };