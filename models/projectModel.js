import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  Domain: {
    type: String,
    required: true,
  },
  
});

export const Project = new mongoose.model("Project", projectSchema);
