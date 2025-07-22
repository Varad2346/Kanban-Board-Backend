import express from "express"
import { addProjectCollaborator, createProject, getProjectDetails } from "../controllers/project.controller.js";


const projectRouter=express.Router();

projectRouter.post("/new/",createProject)
projectRouter.post("/",getProjectDetails)
projectRouter.post("/addColab",addProjectCollaborator)
// projectRouter.post("/",loginUser)

export default projectRouter;