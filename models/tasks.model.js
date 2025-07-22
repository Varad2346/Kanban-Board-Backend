import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String, // or Date if you want proper date parsing
  },
  assignee: {
    type: String,
  },
  file: {
    type: String, // File path
  },
});

export const Task = mongoose.model("Task", taskSchema);
