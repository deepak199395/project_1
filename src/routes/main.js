const express = require("express");
const {route}=require('express/lib/application');
const Slider = require("../models/Slider");
const async =require("hbs/lib/async");
const Service=require("../models/Service");
const webside=require("../models/webside");
const contact=require("../models/contact")
const { request, response } = require("express");



const routes  =express.Router();

routes.get("/",async(request,response)=>{
  const websides= await webside.findOne({"_id":"63b2be6b458edf64998f9e40"})
  const slides= await Slider.find()
  const services=await Service.find()
  //console.log(slides);
  
  response.render("index",{
    websides:websides,
    slides:slides,
    services:services
  })
})

    

routes.get("/gallery", async(request,response)=>{
    const websides= await webside.findOne({"_id":"63b2be6b458edf64998f9e40"})
    response.render("gallery",{
        websides:websides
    });
});
    //PROCESS CONTACT FORM/////
routes.post("/process-contact-form",async(request,response)=>{
  console.log("this form is submited")
  console.log(request.body)


 try{

  const data= await contact.create(request.body)
  console.log(data)
  response.redirect("/")

 }catch(e)
 {
  console.log(e)
  response.redirect("/")
 }
})
module.exports=routes;







