const app = require("express");
const object= app();
object.use(app.json());
object.listen(3000,()=>{
    console.log("wdsd");

}); 

object.get("/api",(req,res)=>{
    
    res.status(200).json({"name":"kunal"});

});

object.post("/post",(req,res)=>{
    const name = req.body.name;
    res.status(201).json({"name":name,"id":2});

});

object.put("/put",(req,res)=>{
    res.status(201).json({"name":"kunal","id":2});

});

object.delete("/delete",(req,res)=>{
    res.status(201).json({message: "User deleted"});

});