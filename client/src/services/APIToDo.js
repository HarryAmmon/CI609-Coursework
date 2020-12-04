import axios from "axios";

class ToDoAPI {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetAllToDo() {
    console.log("calling get all");
    return this.api
      .get("api/v1/todos")
      .then((res) => {
        return res.data.todos;
      })
      .catch((err) => {
        return err;
      });
  }

  GetToDo(id) {
    return {};
  }

  PostToDo(todo) {
    console.log("calling POST");
    return this.api
      .post("api/v1/todos", todo)
      .then((res) => {
        console.log("POST success");
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  UpdateToDo(id, completed) {
    console.log("calling Update");
    return this.api
      .patch(`api/v1/todo/${id}`, { completed })
      .then((res) => {
        console.log("Patch success");
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  DeleteToDo(id) {
    console.log("calling delete");
    return this.api
      .delete(`api/v1/todo/${id}`)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  }
}

export default ToDoAPI;
