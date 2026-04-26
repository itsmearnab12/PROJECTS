import mongoose from "mongoose";

const goalschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
});

export const Goal = mongoose.model("Goal", goalschema)
