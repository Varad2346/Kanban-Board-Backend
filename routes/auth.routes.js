import express from "express"
import { loginUser,registerUser ,deleteUser} from "../controllers/auth.controller.js"

const userRouter=express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.delete("/delete",deleteUser)
userRouter.get("/",loginUser)


export default userRouter;