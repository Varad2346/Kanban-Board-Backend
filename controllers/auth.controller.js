import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"

const loginUser=async(req,res)=>{

    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.json({success:false,message:"User not exists"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token=await createToken(user)
        return res.json({success:true,token})
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}

const createToken=(user)=>{
    return jwt.sign({user},"kanban",{expiresIn:"24h"})
}

const registerUser=async(req,res)=>{
    const {name,password,email} =req.body;
    try{
        const exists=await User.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }

        //validate email
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password.length<1){
            return res.json({success:false,message:"Password is too short"});
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        const newUser=new User({   
            name:name,
            email:email,
            password:hashPassword
        });
        const user=await newUser.save();
        res.json({success:true,user})
    }catch(error){
        console.log(error);
        res.json({success:"false",message:"Error"})
    }
}
const deleteUser = async (req, res) => {
  const { userId } = req.body;
    console.log(userId);
  try {
    const deleted = await User.findByIdAndDelete(userId);
    console.log(deleted);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error in deleting user" });
  }
};

export {loginUser,registerUser,deleteUser}