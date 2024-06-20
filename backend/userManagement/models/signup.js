import mongoose from "mongoose";

const signSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 50, // Maximum length of 50 characters
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
  },
});
const signupModels = mongoose.model("user", signSchema);
export default signupModels;
