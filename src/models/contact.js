const mongoose=require("mongoose");

const Contact=mongoose.Schema({

email: String,
phon:String,
query:String
})

module.exports=mongoose.model("queries",Contact)