const { default: mongoose, Schema } = require("mongoose");
const { time } = require("node:console");

const ShowSchema =new  mongoose.Schema({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "MovieModel",
    required: true,
  },
  theathreId: {
    type: Schema.Types.ObjectId,
    ref: "TheathreModel",
    required:true
  },
  screenId:{
    type:Schema.Types.ObjectId,
    ref:"ScreenModel",
    required:true
  },
  showDate:{
    type:Date,
    required:true
  },
  showTime:{
    type:String,
    required:true
  }
});


const ShowModel=new mongoose.model("ShowModel",ShowSchema);
module.exports=ShowModel;