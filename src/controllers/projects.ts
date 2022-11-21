import projectModel from "../models/projects-schema";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

export const getAll = async (req, res) => {
  const allData = await projectModel.find();
  res.status(200).send({ status: "Ok", data: allData });
};

export const getById = async (req, res) => {
  const id = req.params;
  const project = await projectModel.findById(id);
  if(!project) return res.status(404).send('Project not find');
  res.status(200).send({ status: "Ok", data: project });
};

export const create = async (req, res) => {
  const { title, category, tags, shortDescription, longDescription, status } =
    req.body;
  if (!req.files) return res.status(405).send("Select one image" + " " + req.files);
  try {
    const uploadImgs: Promise<UploadApiResponse>[] = req.files.map((file) =>
      cloudinary.uploader.upload(file.path, {
        folder: "projects",
      })
    );
    const resultImgs = await Promise.all(uploadImgs);
    const mappedImgs = resultImgs.map((img) => {
      return {
        public_id: img.original_filename,
        url: img.url,
      };
    });
    const newProject = new projectModel({
      imgs: mappedImgs,
      title,
      category,
      tags,
      shortDescription,
      longDescription,
      status,
    });
    await newProject.save();
    res.status(201).send({ status: "Ok", data: newProject });
  } catch (error) {
    console.log("New project failed", error);
  };
};

export const update = async (req, res) => {
  const id = req.params;
  const updateBody = req.body;
  const updatedProject = await projectModel.findOneAndUpdate(id, updateBody, {
    new: true,
  });
  res.status(200).send({ status: "Ok", data: updatedProject });
};

export const deleteById = async (req, res) => {
  const id = req.params;
  await projectModel.findByIdAndDelete(id, { new: true });
  res.status(200).send({ status: "Ok" });
};
