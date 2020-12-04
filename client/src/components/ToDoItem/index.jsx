import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";
import ToDoApi from "../../services/APIToDo";
import DeleteButton from "../DeleteButton";

const ToDoItem = ({ id, title, note, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [show, setShow] = useState(true);

  const api = new ToDoApi("http://ci609api.ha383.brighton.domains");

  const handleChange = () => {
    setIsCompleted((isCompleted) => !isCompleted);
    api.UpdateToDo(id, !isCompleted);
  };

  const handleDelete = () => {
    setShow(false);
    api.DeleteToDo(id);
  };

  return show ? (
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
      <DeleteButton id={id} handleClick={handleDelete} />
    </div>
  ) : (
    <></>
  );
};

export default ToDoItem;
