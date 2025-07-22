import mongoose from "mongoose";
import { Task } from "./tasks.model.js";

const columnSchema=new mongoose.Schema({
    projectId:{
       type:String
    },
    title:{
        type:String,
        required:true
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
    },]
})

export const Column=new mongoose.model("Column",columnSchema)