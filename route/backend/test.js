let express=require('express');
let test=express();


test.get('/',(req,res)=>{
    res.render("../views/backend/admin");
})

module.exports=test;