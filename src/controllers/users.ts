import userModel from '../models/users-schema';

export const getAll = async (req, res) => { 
  const allData = await userModel.find();
  res.status(200).send({ status: 'Ok', data: allData });
};

export const getById = async (req, res) => {
  const id = req.params;
  const user = await userModel.findById( id );
  res.status(200).send({ status: 'Ok', data: user });
};

export const create = async (req, res) => {
  const { name, lastName, email, isActive } = req.body;
  const newUser = new userModel({ name, lastName, email, isActive });
  await newUser.save();
  res.status(201).send({ status: 'Ok', data: newUser });
};

export const update = async (req, res) => {
  const id = req.params;
  const updateBody = req.body;
  const updatedUser = await userModel.findByIdAndUpdate(id, updateBody, { new: true });
  res.status(200).send({ status: 'Ok', data: updatedUser });
};

export const deleteById = async (req, res) => {
  const id = req.params;
  await userModel.findByIdAndDelete(id, {new: true});
  res.status(200).send({status: 'Ok'});
};