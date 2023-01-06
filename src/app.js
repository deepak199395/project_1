const express =require("express");
const hbs =require("hbs");
const app = express();
const routes=require("./routes/main")
const mongoose=require("mongoose");    
const webside=require("./models/webside");  
const  Slider= require("./models/Slider");  
const Service=require("./models/Service");  
const bodyparser=require("body-parser") ;  


app.use(bodyparser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)



                                     // hbs configuration//  tamplates engin//
 
app.set('view engine','hbs')
app.set("views","views")

hbs.registerPartials("views/partials")


                          //database collection//
mongoose.connect("mongodb://localhost/webside",()=>{
    console.log("db connected")

//Service.create([{
  //icon:              'fa-brands fa-js',
//title:             'provide javascript courses',
//description:       'javascript is backend languvage',
//linlText:          'http://www.spyzy.in',
//link:              'Check'

//},{
 // icon:              "fa-brands fa-node",
//title:             'provide node express courses',
//description:       'node express is backend  language',
//linlText:          'http://www.nodeexpress.com',
//link:              'learn'

//},
//{
 ////icon:              "fa-solid fa-database",
//title:             'provide database courses',
//description:       'database is using to store data in database',
//linlText:          'http://www.mongodb.com',
//link:              'Cheak'

//}

//])





//Slider.create([
   // {
    //   tital: 'learn nodeexpress',
    //    subTitle:'nodeexpress is backend language',
     //  imageUrl: '/static/images/s1.png'
    //},
   //{
     //   tital: ' basic  nodeexpress',
      //  subTitle:'nodeexpress help in build dynamic webside',
      // imageUrl: '/static/images/n2.png'
    //},
  // {
      //  tital: 'advance node express nodeexpress',
      // subTitle:'nodeexpress is use to build blockchain ',
       // imageUrl: '/static/images/s3.png'
   // }
//])    






    //webside.create({
      //  brandName: "DEEPAK",
      //  brandIconUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw1.pngwing.com%2Fpngs%2F885%2F534%2Fpng-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-sreax&tbnid=UmKVLysM_CsRaM&vet=12ahUKEwiyxt7-0Kj8AhWlyXMBHSbjBfMQMygDegUIARDAAQ..i&docid=vtuG906AAXp21M&w=920&h=648&q=small%20node%20express%20logo&ved=2ahUKEwiyxt7-0Kj8AhWlyXMBHSbjBfMQMygDegUIARDAAQ",
      //  links:[
        //    {
         //       label:" HOME",
          //      url:"/"
         //   },
         //   {
         //       label:"Disabled",
         //       url:"/Disabled"
         //   },
           // {
             //   label:"gallery",
               // url:"/gallery"
          //  },
            //{
              //  label:"contact",
                //url:"/contact"
            //},
            //{
            //    label:"aboutUs",
             //   url:"/aboutUS"
           // },
       // ]
   // })
})                          

app.listen(process.env.PORT | 3000,()=>{
    console.log("server is start")
})