import Artist from "../models/Artist.js";
import Time from "../models/Time.js";

export const createArtist = async(req,res, next) =>{
    const newArtist = new Artist(req.body)

    try{
        const savedArtist = await newArtist.save();
        res.status(200).json(savedArtist);
    }catch(err){
        next(err);
    };
}

export const updateArtist = async(req,res, next) =>{
    try{
        const updatedArtist = await Artist.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body}, 
            { new:true}
        );
        res.status(200).json(updatedArtist)
    }catch(err){
        next(err);
    };
}

export const deleteArtist = async(req,res, next) =>{
    try{
        await Artist.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Artist Deleted")
    }catch(err){
        next(err);
    };
}

export const getArtist = async(req,res, next) =>{
    try{
        const Artist = await Artist.findById(
            req.params.id
        );
        res.status(200).json(Artist)
    }catch(err){
        next(err);
    };
}

export const getallArtist = async(req,res, next) =>{
    try{
        const Artists = await Artist.find();
        res.status(200).json(Artists)
    }catch(err){
        next(err);
    };
}

export const countByType = async(req,res, next) =>{
    const types = req.query.types.split(",")
    try{
        const list = await Promise.all(types.map(type=>{
            return Artist.countDocuments({type:type})
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
  
  export const getArtistTimes = async (req, res, next) => {
    try {
      const Artist = await Artist.findById(req.params.id);
      const list = await Promise.all(
        Artist.times.map((time) => {
          return Time.findById(time);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };

  export const getFeatured = async (req, res, next) => {
    try {
      const featured = await Artist.find({featured:true});
      res.status(200).json(featured)
    } catch (err) {
      next(err);
    }
  };