import { Schema, model } from "mongoose";


const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 20
  },
  lastName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 25
  },
  email: {
    type: String,
    require: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const userModel = model('User', userSchema);

export default userModel;