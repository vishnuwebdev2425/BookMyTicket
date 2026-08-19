const { default: mongoose, Mongoose, Schema } = require("mongoose");

const ScreenSchema=new mongoose.Schema({
    theathreId:{
        type:Schema.Types.ObjectId,
        ref:"ThreathreModel",
        required:true,
    },
    name:{
        type:String,//Screen 1,Audi 1 ,Diamond
        required:true,
    },
    seatLayout:[{
        row:{
            type:String,
            required:true
        },//"A","B",
        seatNumber:{
            type:Number,
            required:true
        },
        status:{
            type:String,
            enum:["Available","Occupied"],
            default:"Available"
        },
        price:{
            type:Number,
            required:true
        }
    }]
})

const ScreenModel=new mongoose.model("ScreenModel",ScreenSchema);
module.exports=ScreenModel;