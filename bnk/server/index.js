const express=require("express");
const app=express();
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://naveen:naveen1@cluster0.rczrb6m.mongodb.net/bankdb?retryWrites=true&w=majority");




app.listen(3003,()=>{

    console.log("Server runs successfully");
});