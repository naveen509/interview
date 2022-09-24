const mongoose=require("mongoose");

const Account1Schema=new mongoose.Schema({
    amount:{
        type:float,
        required:true,
    },
    
});

const Account1Model=mongoose.model("account1",Account1Schema);

module.exports=Account1Model;