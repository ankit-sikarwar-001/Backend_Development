const express = require("express");
require("dotenv").config();
const app = express();
// const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello backend");
})
app.get("/user",(req,res)=>{
    res.send("Ankit Singh");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})