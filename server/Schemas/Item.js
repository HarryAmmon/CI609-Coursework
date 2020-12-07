import mongoose from "mongoose";

const Item = mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  note: String,
});

export default Item;
