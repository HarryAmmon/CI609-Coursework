import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";

const ToDoItem = ({ id, title, note, completed }) => {
  const [isCompleted, setIsCompleted] = useState(
    completed === "true" ? true : false
  );

  return (
    <div className={Styles.root}>
      <Checkbox
        id={id}
        name={title}
        value={isCompleted}
        onChange={() => setIsCompleted((isCompleted) => !isCompleted)}
      />
      <div className={Styles.titleWrapper}>
        <ItemTitle title={title} />
        {note ? <Note note={note} /> : <></>}
      </div>
    </div>
  );
};

export default ToDoItem;
