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
  Collaborators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Project = new mongoose.model("Project", projectSchema);
