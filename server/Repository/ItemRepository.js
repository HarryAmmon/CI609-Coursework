import Items from "../Models/Items";

class ItemRepository {
  constructor(model) {
    this.model = model;
  }

  ReadAll(listID, callback) {
    this.model.findOne({ _id: listID }, (error, response) => {
      if (response === null) {
        callback(error, undefined);
      } else {
        const items = response.items;
        callback(error, items);
      }
    });
  }

  Create(listID, data, callback) {
    console.log(listID);
    this.model.findOne({ _id: listID }, (error, response) => {
      console.log(response);
      if (response === null) {
        console.log("response is undefined");
        callback(error, undefined);
      } else {
        let newItem = new Items({ title: data.title, note: data.note });
        response.items.push(newItem);
        response.save((error, document) => {
          callback(error, document);
        });
      }
    });
  }

  Delete(itemID, callback) {
    this.model.findOne({ "items._id": itemID }, (error, result) => {
      if (result === null) {
        callback(error, undefined);
      } else {
        result.items.id(itemID).remove();
        result.save((error, document) => {
          console.log(document);
          callback(error, document);
        });
      }
    });
  }

  Update(listID, itemID, completed, callback) {
    this.model.updateOne(
      { _id: listID, "items._id": itemID },
      { "items.$.completed": Boolean(completed) },
      (error, result) => {
        if (error) console.log(error);
        if (result === null) {
          callback(error, undefined);
        } else {
          callback(error, result);
        }
      }
    );
  }
}

export default ItemRepository;
