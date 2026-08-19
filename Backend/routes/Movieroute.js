const express=require('express');
const MovieModel = require('../database/MovieSchema');
const movierouter=express.Router();

movierouter.post("/addmovie",async(req,res)=>{
    try{
        const data=req.body;
        const allowedOptions = [
          "title",
          "description",
          "language",
          "genre",
          "duration",
          "releaseDate",
          "poster",
          "cast",
          "rating",
          "censorRating",
          "location",
          "status",
          "movieinfo",
        ];
       
        const resultAllowed=Object.keys(data).every((k)=>{
           return allowedOptions.includes(k)
        })
       
        if(!resultAllowed){
            return res.status(404).json({message:"Details Not Match Please try Again Later"});
        }
        const result=new MovieModel(req.body)
        await result.save();
        return res.status(200).json({message:"Data Added SuceessFully"});


    }catch(err){
        return res.status(500).json({message:err});
    }
});


movierouter.post("/addmanymovies",async(req,res)=>{
    try{

        const data=req.body;

        const result=await MovieModel.insertMany(data);
        return res.status(200).json({message:"Data Inserted SuccessFully"});

    }catch(err){
        return res.status(404).json({message:err});
    }
})


module.exports=movierouter;