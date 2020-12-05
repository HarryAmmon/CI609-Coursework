import mongoose from "mongoose";
import Item from "../Models/Items";
import Lists from "../Models/Lists";

const makeExampleList = () => {
  const listExample = new Lists({
    title: "Shopping List",
    items: [
      {
        title: "Biscuits",
        note: "chocolate",
      },
      {
        title: "Apples",
      },
      { title: "Chicken" },
    ],
  });

  listExample.save();
};

export const findItemByID = (id) => {
  Lists.findOne({ "items._id": id }, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    const oneItem = result.items.filter((x) => x.id === id);
  });
};

export const findItemAndUpdateCompleted = (listID, itemID, complete) => {
  Lists.updateOne(
    { _id: listID, "items._id": itemID },
    { "items.$.completed": complete },
    (err, result) => {
      if (err) console.log(err);
      console.log(result);
    }
  );
};

export const findItemAndDelete = (listID, itemID) => {
  Lists.findOne({ "items._id": itemID }, (err, result) => {
    if (err) console.log(err);
    if (result === null) {
      console.log("cant be found");
    } else {
      result.items.id(itemID).remove();
      result.save((error, document, rows) => {
        callBack(error, document);
      });
    }
  });
};

export const getAllListIDS = () => {
  Lists.find({}, "id", (err, response) => {
    console.log(response);
  });
};

export const getAllItemsInList = (listID) => {
  Lists.findOne({ _id: listID }, (error, response) => {
    console.log(response.items);
  });
};

export const createItemInList = (listID, itemData) => {
  Lists.findOne({ _id: listID }, (error, response) => {
    let result;
    let newItem = new Item({ title: itemData.title, note: itemData.note });
    console.log(response);
    console.log(newItem);
    if (response === undefined) {
      result = undefined;
    } else {
      response.items.push(newItem);
      response.save((error, document) => console.log(document));
    }
  });
};
export default makeExampleList;
