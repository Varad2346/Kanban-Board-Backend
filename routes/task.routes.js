import express from "express";
import { createTask, getTask, upload } from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/new", upload.single("file"), createTask); // <-- multer used here
taskRouter.get("/", getTask);

export default taskRouter;
