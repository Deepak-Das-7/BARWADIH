let express=require('express');
let dotenv =require('dotenv');

dotenv.config({path:'./config.env'});
let app=express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public/'));


// app.get('/',(req,res)=>{
//     res.send("This is front end");
// })

let adminRout=require('./route/backend/admin.js')
let page=require('./route/backend/page.js')
let test=require('./route/backend/test.js')
app.use('/',test);
app.use('/admin/',adminRout);
app.use('/admin/page/',page);

app.listen(process.env.PORT , ()=>{
    console.log(`${process.env.PORT} port working`);
});