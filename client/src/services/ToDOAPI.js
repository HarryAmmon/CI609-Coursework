import axios from "axios";

class ToDoAPI {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetAllToDo() {
    return this.api
      .get("api/v1/todos")
      .then((res) => {
        console.log("SUCCESS");
        return res.data.todos;
      })
      .catch((err) => {
        console.log(err);
        return "fail";
      });
  }

  GetToDo(id) {
    return {};
  }

  PostToDo(todo) {
    return {};
  }
}

export default ToDoAPI;
