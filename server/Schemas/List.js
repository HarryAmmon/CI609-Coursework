import mongoose from "mongoose";
import Item from "./Item";

const List = mongoose.Schema({
  title: { type: String, required: true },
  items: [Item],
});

export default List;
