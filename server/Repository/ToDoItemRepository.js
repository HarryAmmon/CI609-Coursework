const mongoose = require("mongoose");
import ToDoItem from "../Models/ToDoItem";

class ToDoItemRepository {
  ReadAll(callback) {
    const items = ToDoItem.find().then((value) => {
      callback(value);
    });
  }

  Create(data, callback) {
    const item = new ToDoItem(data);
    item.save((err, createdItem) => {
      if (err) {
        console.log(err);
      }
      callback(createdItem);
    });
  }

  Delete(id, callback) {
    ToDoItem.deleteOne({ _id: id }, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  }

  Update(id, data, callback) {
    ToDoItem.updateOne({ _id: id }, data, (err, raw) => {
      if (err) {
        console.log(err);
      }
      callback(raw);
    });
  }
}

export default ToDoItemRepository;
