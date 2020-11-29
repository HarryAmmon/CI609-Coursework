import React, { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem";
import ToDoAPI from "../../services/ToDoAPI";

const ToDoForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, event.target[0].name);
    console.log(event.target[0].checked);
  };

  const api = new ToDoAPI("http://localhost:5000/");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    api.GetAllToDo().then((response) => {
      setToDos(response);
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      {toDos.map((item, index) => (
        <ToDoItem
          title={item.title}
          key={index}
          id={item._id}
          note={item.note}
          completed={item.completed}
        />
      ))}
      <button type="submit">CLICK ME</button>
    </form>
  );
};

export default ToDoForm;
