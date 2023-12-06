let express=require('express');
let page=express();


page.get('/',(req,res)=>{
    res.render("../views/backend/admin");
})

module.exports=page;