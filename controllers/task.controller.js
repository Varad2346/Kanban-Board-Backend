import { Column } from "../models/column.model.js";
import { Task } from "../models/tasks.model.js";
import multer from "multer";
import path from "path";

// Setup Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure "uploads/" exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });

const createTask = async (req, res) => {
  const { id, task, dueDate, assignee } = req.body;
  const filePath = req.file ? req.file.path : null;
  console.log(id,task,dueDate,assignee)
  try {
    const newTask = new Task({
      task,
      dueDate,
      assignee,
      file: filePath,
    });

    const data = await newTask.save();

    const column = await Column.findById(id);
    column.tasks.push(data);
    await column.save();

    return res.json({ success: true, data, column });
  } catch (error) {
    return res.json({ success: false, message: "Error" });
  }
};

const getTask = async (req, res) => {
  try {
    const data = await Task.find();
    if (data) {
      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    return res.json({ success: false, message: "Error" });
  }
};

export { createTask, getTask };
