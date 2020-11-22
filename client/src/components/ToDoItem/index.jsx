import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";

const ToDoItem = ({ title, id }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className={Styles.root}>
      <Checkbox title={title} id={id} />
    </div>
  );
};

export default ToDoItem;
