import React from "react";
import { H2 } from "../Typography";
import AddItemButton from "../AddItemButton";
import Styles from "./ListTitle.module.scss";
import DeleteButton from "../DeleteButton";
import APIList from "../../services/APIList";
import { useHistory } from "react-router-dom";

const ListTitle = ({ listID, name, lists, setLists }) => {
  const api = new APIList("https://ci609api.ha383.brighton.domains");
  const history = useHistory();
  return (
    <div className={Styles.root}>
      <H2>{name}</H2>
      <DeleteButton
        handleClick={() =>
          api.RemoveList(listID).then((response) => {
            const editedList = lists;
            const itemToRemove = editedList.findIndex((x) => x._id === listID);
            editedList.splice(itemToRemove, 1);
            setLists([...editedList]);
            history.push("/");
          })
        }
      >
        Remove List
      </DeleteButton>
      <AddItemButton />
    </div>
  );
};

export default ListTitle;
