const mongoose=require("mongoose");
const webside=mongoose.Schema({

brandName:     String,
brandIconUrl:  String,

links:[
    {
        label: String,
        url: String,
    },
],
});

module.exports=mongoose.model("webside",webside)