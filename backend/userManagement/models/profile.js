import { ID } from "appwrite";
import mongoose from "mongoose";

const signSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    maxlength: 50, // Maximum length of 50 characters
  },
  D_O_B: {
    type: Date,
    required: true,
  },
  PhoneNumber: {
    type: Number,
  },
},{ _id: false });
const profileModels = mongoose.model("userProfile", signSchema);
export default profileModels;
