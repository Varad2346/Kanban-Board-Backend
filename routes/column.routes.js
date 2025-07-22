import express from "express"
import { createColumn, getColumn, updateColumn } from "../controllers/column.controller.js";


const columnRouter=express.Router();

columnRouter.post("/new/:id",createColumn)
columnRouter.post("/",getColumn)
columnRouter.patch("/:id/tasks",updateColumn)

export default columnRouter;