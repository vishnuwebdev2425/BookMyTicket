const { default: mongoose } = require("mongoose");

const TheathreSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:String,
    amenities:[String],
    logo:{
        type:String,
        required:true
    }
})

const TheathreModel=new mongoose.model("TheathreModel",TheathreSchema);
module.exports=TheathreModel;