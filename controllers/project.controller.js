import { Project } from "../models/projectModel.js";

const createProject = async (req, res) => {
  // const {id}=req.params;
  const { userId, projectName, Domain } = req.body;
  try {
    const project = new Project({
      userId: userId,
      projectName: projectName,
      Domain: Domain,
    });

    const data = await project.save();
    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const getProjectDetails = async (req, res) => {
  try {
    const { id } = req.body;

    const data = await Project.find({
      userId: id,
    });
    console.log(data);
    if (data) {
      return res.status(200).json({ success: true, data: data });
    }
  } catch (error) {
    return res.json({ success: false, message: "Error" });
  }
};

export { createProject, getProjectDetails };
