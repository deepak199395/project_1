const mongoose=require("mongoose");
const Service=mongoose.Schema({
icon:              String,
title:             String,
description:       String,
linlText:          String,
link:              String

})
module.exports=mongoose.model("Services",Service)