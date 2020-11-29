import mongoose from "mongoose";

const ToDoScheme = mongoose.Schema({
  completed: Boolean,
  title: { type: String, required: true },
  note: String,
});

export default mongoose.model("ToDoItem", ToDoScheme);
