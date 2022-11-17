import projectModel from '../models/projects-schema';
import { v2 as cloudinary } from 'cloudinary';

export const getAll = async (req, res) => { 
  const allData = await projectModel.find();
  res.status(200).send({ status: 'Ok', data: allData });
};

export const getById = async (req, res) => {
  const id = req.params;
  const project = await projectModel.findById( id );
  res.status(200).send({ status: 'Ok', data: project });
};

export const create = async (req, res) => {
  const { title, category, tags, shortDescription, longDescription, status } = req.body;
  if(!req.file) return
  const uploadImg = await cloudinary.uploader.upload(req.file.path,
    { 
      folder: 'projects'
    });
  const newProject = new projectModel({ 
    imgs: {
      public_id: uploadImg.original_filename,
      url: uploadImg.url
    },
    title, 
    category, 
    tags, 
    shortDescription, 
    longDescription, 
    status 
  });
  await newProject.save();
  res.status(201).send({ status: 'Ok', data: newProject });
};

export const update = async (req, res) => {
  const id = req.params;
  const updateBody = req.body;
  const updatedProject = await projectModel.findOneAndUpdate(id, updateBody, { new: true });
  res.status(200).send({ status: 'Ok', data: updatedProject });
};

export const deleteById = async (req, res) => {
  const id = req.params;
  await projectModel.findByIdAndDelete(id, {new: true});
  res.status(200).send({status: 'Ok'});
};