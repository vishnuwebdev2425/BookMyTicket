const { default: mongoose } = require("mongoose");


const MovieSchema=new mongoose.Schema({
    title:{
        type:"String",
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    language:[String],
    genre:[String],
    duration:{
        type:Number,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    cast:{
        type:[String],
        required:true
    },
    rating:{
        type:Number,
        required:true,
    },
    censorRating:{
        type:String,
        required:true,
    },
    location:{
        type:[String],
        required:true
    },
    status:{
        type:String,
        enum:["upcoming","now_streaming"],
        default:"upcoming"
    },
    movieinfo:{
        type:String,
        enum:["rerelease","newmovie"],
        default:"newmovie"
    }

})


const MovieModel=new mongoose.model("MovieModel",MovieSchema);

module.exports=MovieModel;