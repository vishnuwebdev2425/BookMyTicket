const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
app.use(express.json())
const movierouter=require("./routes/Movieroute")

const InitalizeDB=async()=>{
    try{

        await mongoose.connect(
          "mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/BookMyTicket",
        );


        app.listen(2003,()=>{
            console.log("Server Started SuccessFully");
        })

    }catch(err){
        console.log(err);
    }
}



app.use("/",movierouter);

InitalizeDB();