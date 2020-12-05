import React, { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem";
import ToDoAPI from "../../services/APIToDo";

const ToDoForm = ({ listID }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, event.target[0].name);
    console.log(event.target[0].checked);
  };

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const api = new ToDoAPI("http://localhost:5000");
    api.GetAllToDo(listID).then((response) => {
      console.log(response);
      setToDos(response);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {toDos.map((item, index) => (
        <ToDoItem
          title={item.title}
          key={index}
          id={item._id}
          listID={listID}
          note={item.note}
          completed={item.completed}
        />
      ))}
    </form>
  );
};

export default ToDoForm;
