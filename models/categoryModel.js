import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  icon: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Category", categorySchema);
