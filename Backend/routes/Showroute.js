const express=require('express');
const ShowModel = require('../database/ShowSchema');
const showrouter=express.Router();



showrouter.post("/addShow",async(req,res)=>{
    try{
        console.log("Server Reached SuccessFully");
        const allowedData = [
          "movieId",
          "theathreId",
          "screenId",
          "showDate",
          "showTime",
        ];

        const data=req.body;
        const allowedResponse=Object.keys(data).every((k)=>{
            return allowedData.includes(k);
        })
        if(!allowedData){
            return res.status(404).json({message:"Invalid Details Please Try Again"});
        }
        const response=new ShowModel(data);
        await response.save();
        return res.status(202).json({message:"Data Inserted SuccessFully"});

    }catch(err){
        return res.status(500).json({message:"Something Went Wrong: "+err});

    }
})

showrouter.post("/addMultipleShows",async(req,res)=>{
    try{
        console.log("Server Reached SuccessFully");
        const allowedData = [
          "movieId",
          "theathreId",
          "screenId",
          "showDate",
          "showTime",
        ];
        const data=req.body;
        const responseDetails=data.every((k)=>{
            Object.keys(k).every((property)=>{
                return allowedData.includes(property);
            })
        })

        if(!responseDetails){
            return res.status(404).json({message:"Invalid Details Please Try Again"});
        }

        await ShowModel.insertMany(data);
        return res.status(200).json({message:"Data Inserted SuccessFully"});

    }catch(err){
        return res.status(500).json({message:"Something Went Wrong"});
    }
})


module.exports=showrouter;