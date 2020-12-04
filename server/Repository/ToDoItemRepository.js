const mongoose = require("mongoose");
import ToDoItem from "../Models/ToDoItem";

class ToDoItemRepository {
  ReadAll(callback) {
    const items = ToDoItem.find((error, response) => {
      callback(error, response);
    });
  }

  Create(data, callback) {
    const item = new ToDoItem(data);
    item.save((error, createdItem) => {
      callback(error, createdItem);
    });
  }

  Delete(id, callback) {
    console.log(`DELETE: ${id}`);
    ToDoItem.deleteOne({ _id: id }, (error, result) => {
      callback(error, result);
    });
  }

  Update(id, data, callback) {
    ToDoItem.updateOne({ _id: id }, data, (error, result) => {
      callback(error, result);
    });
  }
}

export default ToDoItemRepository;
