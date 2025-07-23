import express from "express"
import {  createProject, getProjectDetails } from "../controllers/project.controller.js";


const projectRouter=express.Router();

projectRouter.post("/new/",createProject)
projectRouter.post("/",getProjectDetails)

export default projectRouter;