const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const movierouter = require("./routes/Movieroute");
const theathrerouter = require("./routes/Theathreroute");
const screenrouter = require("./routes/Screenroute");
const showrouter=require("./routes/Showroute");
app.use(express.json())


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
app.use("/",theathrerouter);
app.use("/",screenrouter);
app.use("/",showrouter);
InitalizeDB();