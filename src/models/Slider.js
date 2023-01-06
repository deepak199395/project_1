const mongoose= require("mongoose");
const Slider =mongoose.Schema({

tital:   String,
subTitle: String,
imageUrl: String,
class: String

})

module.exports=mongoose.model('slider',Slider);