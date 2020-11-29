import React, { useEffect, useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";
import ToDoApi from "../../services/ToDoAPI";

const ToDoItem = ({ id, title, note, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const api = new ToDoApi("http://localhost:5000/");
  const handleChange = () => {
    setIsCompleted((isCompleted) => !isCompleted);
    api.UpdateToDo(id, !isCompleted);
  };

  return (
    <div className={Styles.root}>
      <Checkbox
        id={id}
        name={title}
        value={isCompleted}
        onChange={handleChange}
      />
      <div className={Styles.titleWrapper}>
        <ItemTitle title={title} />
        {note ? <Note note={note} /> : <></>}
      </div>
    </div>
  );
};

export default ToDoItem;
