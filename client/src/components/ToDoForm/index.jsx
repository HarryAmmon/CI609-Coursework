import React, { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem";
import ToDoAPI from "../../services/APIToDo";
import { useParams } from "react-router-dom";
const ToDoForm = () => {
  let { id } = useParams();

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    console.log(`LISTID: ${id}`);
    const api = new ToDoAPI("http://localhost:5000");
    api.GetAllToDo(id).then((response) => {
      setToDos(response);
    });
  }, [id]);

  return (
    <>
      {toDos.map((item, index) => (
        <ToDoItem
          title={item.title}
          key={index}
          itemID={item._id}
          note={item.note}
          completed={item.completed}
        />
      ))}
    </>
  );
};

export default ToDoForm;
