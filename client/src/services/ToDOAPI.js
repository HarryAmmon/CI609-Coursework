import axios from "axios";

class ToDoAPI {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetAllToDo() {
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
}

export default ToDoAPI;
