const express=require('express');
const TheathreModel = require('../database/TheathreSchema');
const theathreroute=express.Router();


theathreroute.post("/addthreathre",async(req,res)=>{
    try{
        console.log("Server Reached SuccessFully");
        const allowedData = ["name", "city", "address", "amenities", "logo"];

        const data=req.body;
        const allowedResult=Object.keys(data).every((k)=>{
            return allowedData.includes(k);
        })

        if(!allowedResult){
            return res.status(500).json({message:"Invalid Details Please Try Again Later"});

        }
        const result=new TheathreModel(data);
        await result.save();
        return res.status(200).json({message:"Data Added SuccessFully"});
    }catch(err){
        return res.status(500).json({message:err});
    }
})


theathreroute.post("/addMultipletheathre",async(req,res)=>{
    try{
       
        const allowedData = ["name", "city", "address", "amenities", "logo"];

        const data = req.body;
        const allowedResult = data.every((theatre) => {
          return Object.keys(theatre).every((key) => {
            return allowedData.includes(key);
          });
        });
        if (!allowedResult) {
          return res
            .status(500)
            .json({ message: "Invalid Details Please Try Again Later" });
        }
        
        const response=await TheathreModel.insertMany(data);
        return res.status(200).json({message:"Data Added SuccessFully"});
    }catch(err){
        return res.status(500).json({message:"Something went wrong: "+err});
    }
})


module.exports=theathreroute;