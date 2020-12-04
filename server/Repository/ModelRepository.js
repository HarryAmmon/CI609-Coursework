const mongoose = require("mongoose");

class ModelRepository {
  constructor(model) {
    this.model = model;
  }

  ReadAll(callback) {
    const items = this.model.find((error, response) => {
      callback(error, response);
    });
  }

  Create(data, callback) {
    const item = new this.model(data);
    item.save((error, createdItem) => {
      callback(error, createdItem);
    });
  }

  Delete(id, callback) {
    console.log(`DELETE: ${id}`);
    this.model.deleteOne({ _id: id }, (error, result) => {
      callback(error, result);
    });
  }

  Update(id, data, callback) {
    this.model.updateOne({ _id: id }, data, (error, result) => {
      callback(error, result);
    });
  }
}

export default ModelRepository;
