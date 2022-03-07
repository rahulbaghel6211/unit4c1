const express=require("express");
const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({route:"/books",role:req.role})
})

app.get("/libraies",logger,logger,(req,res)=>{
    return res.send({route:"/libraies",parmission:true,role:req.role})
})
app.get("/authors",logger,logger,(req,res)=>{
    return res.send({route:"/authors",parmission:true,role:req.role})
})

function logger(req,res,next){
    if(req.path==="/books"){
        req.role="Live class on friday"
    }
    else if(req.path==="/libraies"){
        req.role="live class on friday"

    }
    else{
        req.role="live class on friday"
    }
    console.log("libraies")
    console.log("authors")
    next();
}
app.listen(8456,()=>{
    console.log("listening on port 8456")
})
