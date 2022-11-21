import { Schema, model } from "mongoose";


const projectSchema = new Schema({
  imgs: {
    type: Array
  },
  title: {
    type: String,
    require: true,
    unique: true
  },
  category: {
    type: String,
    require: true
  },
  tags: {
    type: String,
    enum: {
      values: ['tag', 'tag1', 'tag2'],
      message: '{VALUE} is not a defined tag'
    },
    require: true
  },
  shortDescription: {
    type: String,
    require: true
  },
  longDescription: {
    type: String,
    require: true
  },
  status: {
    type: String,
    enum: {
      values: ['En desarrollo', 'Finalizado'],
      message: '{VALUE} is not a defined status'
  },
    default: 'En desarrollo'
  }
}, {timestamps: true});

const projectModel = model('Project', projectSchema);

export default projectModel;