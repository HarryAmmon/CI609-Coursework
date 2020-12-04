import React from "react";
import ToDoAPI from "../../services/ToDoAPI";
import Styles from "./DeleteButton.module.scss";

const DeleteButton = ({ id }) => {
  const api = new ToDoAPI("https://localhost:5000");

  const handleClick = () => {
    api.DeleteToDo(id);
  };

  return (
    <button className={Styles.root} type="button" onClick={handleClick}>
      Remove
    </button>
  );
};

export default DeleteButton;
