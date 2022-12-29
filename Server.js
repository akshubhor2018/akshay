const express =require("express");
const app=express();
const path=require("path");
app.get("/",(req,resp)=>{
resp.sendFile(path.join(__dirname,"index.html"));




});
app.listen(3001);
console.log("zal chalu");