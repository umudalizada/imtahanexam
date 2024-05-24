import mongoose from "mongoose";

mongoose.connect(process.env.MongoURL).then(()=>{
    console.log("Connected Mongoose");
}).catch(()=>{
    console.log("Disconnected mongoose");
})