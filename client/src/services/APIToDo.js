import axios from "axios";

class ToDoAPI {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetAllToDo(listID) {
    console.log("calling get all");
    console.log(listID);
    return this.api
      .get(`api/v1/todos/${listID}`)
      .then((response) => {
        return response.data.todos;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  PostToDo(listID, todo) {
    console.log("calling POST");
    return this.api
      .post(`api/v1/todos/${listID}`, todo)
      .then((res) => {
        console.log("POST success");
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  UpdateToDo(listID, itemID, completed) {
    console.log("calling Update");
    console.log(listID);
    console.log(itemID);
    return this.api
      .patch(`api/v1/todo/${listID}`, { itemID: itemID, complete: completed })
      .then((res) => {
        console.log("Patch success");
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  DeleteToDo(itemID) {
    console.log("calling delete");
    return this.api
      .delete(`api/v1/todo/${itemID}`)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  }
}

export default ToDoAPI;
