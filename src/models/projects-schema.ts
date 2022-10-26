import { Schema, model } from "mongoose";


const projectSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const projectModel = model('Project', projectSchema);

export default projectModel;