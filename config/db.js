import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect(`${process.env.MONGODB_URI}/kanban`,).then(()=>console.log("connected")).catch((err)=>console.log(err))
}