import React, { useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";
import ToDoApi from "../../services/APIToDo";
import DeleteButton from "../DeleteButton";

const ToDoItem = ({ id, listID, title, note, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [show, setShow] = useState(true);

  const api = new ToDoApi("http://localhost:5000");

  const handleChange = () => {
    setIsCompleted((isCompleted) => !isCompleted);
    api.UpdateToDo(id, listID, !isCompleted);
  };

  const handleDelete = () => {
    setShow(false);
    api.DeleteToDo(id, listID);
  };

  return show ? (
    <div className={Styles.root}>
      <Checkbox
        id={id}
        listID={listID}
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
