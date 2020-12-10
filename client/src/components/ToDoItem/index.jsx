import React, { useEffect, useState } from "react";
import Styles from "./ToDoItem.module.scss";
import Checkbox from "../Checkbox";
import Note from "../Note";
import ItemTitle from "../ItemTitle";
import ToDoApi from "../../services/APIToDo";
import DeleteButton from "../DeleteButton";
import { useParams } from "react-router-dom";

const ToDoItem = ({ itemID, title, note, completed }) => {
  let { id } = useParams();
  const [isCompleted, setIsCompleted] = useState(completed);
  const [show, setShow] = useState(true);

  const api = new ToDoApi("https://ci609api.ha383.brighton.domains");

  const handleChange = () => {
    setIsCompleted((isCompleted) => !isCompleted);
    api.UpdateToDo(itemID, !isCompleted);
  };

  const handleDelete = () => {
    setShow(false);
    api.DeleteToDo(itemID, id);
  };

  return show ? (
    <div className={Styles.root}>
      <Checkbox
        id={itemID}
        listID={id}
        name={title}
        value={isCompleted}
        onChange={handleChange}
      />
      <div className={Styles.titleWrapper}>
        <ItemTitle title={title} />
        {note ? <Note note={note} /> : <></>}
      </div>
      <DeleteButton handleClick={handleDelete}>Remove</DeleteButton>
    </div>
  ) : (
    <></>
  );
};

export default ToDoItem;
