import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import userRouter from "./routes/auth.routes.js";
import projectRouter from "./routes/project.routes.js";
import taskRouter from "./routes/task.routes.js";
import columnRouter from "./routes/column.routes.js";

const app=express()
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"));

connectDB();

app.get("/",(req,res)=>{
    res.send("welcome to app")
})

app.use('/api/auth',userRouter)
app.use('/api/project',projectRouter)
app.use('/api/task',taskRouter)
app.use('/api/column',columnRouter)

app.listen(3000,()=>{
    console.log("running on 3000")
})