import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";

const ToDoItem = ({ id, title, note }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className={Styles.root}>
      <Checkbox id={id} />
      <ItemTitle title={title} />
      <Note note={note} />
    </div>
  );
};

export default ToDoItem;
