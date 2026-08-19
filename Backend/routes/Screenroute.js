const express=require('express');
const ScreenModel = require('../database/ScreenSchema');
const screenroute=express.Router();


screenroute.post("/addscreendetails",async(req,res)=>{
    try{
        console.log("Sever Reached SuccssFully");
        const allowedData = ["theathreId", "name", "seatLayout"];
        const data=req.body;

        const allowedResponse=Object.keys(data).every((k)=>{
            return allowedData.includes(k);
        })

        if(!allowedResponse){
            return res.status(404).json({message:"Invalid Details Please Try Again Later"});
        }


        const response=new ScreenModel(data);
        await response.save();
        return res.status(200).json({message:"Data Submitted SuccessFully"});

    }catch(err){
        return res.status(500).json({message:"Something Went Wrong"+ err});
    }
})

screenroute.post("/addMultpileScreen",async(req,res)=>{
    try{
        const allowedData = ["theathreId", "name", "seatLayout"];

        const data=req.body;
        const responeResult=data.every((k)=>{
            Object.keys(k).every((property)=>{
                return allowedData.includes(property);
            })
        })

        if(!responeResult){
            return res.status(404).json({message:"Invalid Details Please Try Again"});
        }

        await ScreenModel.insertMany(data);
        return res.status(200).json({message:"Data Inserted SucessFully"});
    }catch(err){
        return res.status(500).json({message:"Something went Wrong"+ err});
    }
})
module.exports=screenroute;