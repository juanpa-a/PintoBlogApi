import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  steps: {
    type: [Array],
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("recipe", recipeSchema);
