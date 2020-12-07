import axios from "axios";

class ToDoAPI {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetAllToDo(listID) {
    console.log("calling GET all");
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
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  UpdateToDo(itemID, completed) {
    return this.api
      .patch(`api/v1/todo/${itemID}`, { complete: completed })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  DeleteToDo(itemID) {
    return this.api
      .delete(`api/v1/todo/${itemID}`)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  }
}

export default ToDoAPI;
