import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectmember.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

const getProjects = asyncHandler(async (req, res) => {
  // TEST: get all existing projects
});

const getProjectById = asyncHandler(async (req, res) => {
  // TEST: get project by id
});

const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const project = await Project.create({
    name,
    description,
    createdBy: new mongoose.Types.ObjectId(req.user._id),
  });

  await ProjectMember.create({
    user: new mongoose.Types.ObjectId(req.user._id),
    project: new mongoose.Types.ObjectId(project._id),
    role: UserRolesEnum.ADMIN,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, project, "project created successfully"));
});

const updateProject = asyncHandler(async (req, res) => {
  // TEST: update project by id
});

const deleteProject = asyncHandler(async (req, res) => {
  // TEST: delete project by id
});

const addMembersToProject = asyncHandler(async (req, res) => {
  // TEST: add members to project
});

const getProjectMembers = asyncHandler(async (req, res) => {
  // TEST: get project members
});

const updateMemberRole = asyncHandler(async (req, res) => {
  // TEST: update member role
});

const deleteMember = asyncHandler(async (req, res) => {
  // TEST: delete member from the project
});

export {
  getProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
  addMembersToProject,
  getProjectMembers,
  updateMemberRole,
  deleteMember,
};
