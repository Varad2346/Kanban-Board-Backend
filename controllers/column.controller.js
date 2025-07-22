import { Column } from "../models/column.model.js";
import { Project } from "../models/projectModel.js";


const createColumn=async(req,res)=>{
    const {id}=req.params;
    const {title}=req.body;
    try{
        const column=new Column({
          projectId:id,
            title:title
        })
        const data=await column.save();
        return res.json({success:true,data})
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}

const getColumn=async(req,res)=>{
    try{
      const {id}=req.body;
       const data=await Column.find({projectId:id}).populate("tasks");
        // console.log(data);
        if(data){
            return res.status(200).json({success:true,data:data});
        }

    }catch(error){
        return res.json({success:false,message:"Error"})
    }
}

const updateColumn=async (req, res) => {
  const { tasks } = req.body;

  try {
    const column = await Column.findByIdAndUpdate(
      req.params.id,
      { tasks },
      { new: true }
    ).populate('tasks');

    res.json({ success: true, data: column });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to update tasks' });
  }
}

export {createColumn,getColumn,updateColumn}