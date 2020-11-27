import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";

const ToDoItem = ({ id, title, note }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className={Styles.root}>
      <Checkbox
        id={id}
        name={title}
        value={completed}
        onChange={() => setCompleted((completed) => !completed)}
      />
      <div className={Styles.titleWrapper}>
        <ItemTitle title={title} />
        {note ? <Note note={note} /> : <></>}
      </div>
    </div>
  );
};

export default ToDoItem;
