import React from "react";
import { H2 } from "../Typography";
import AddItemButton from "../AddItemButton";
import Styles from "./ListTitle.module.scss";
import DeleteButton from "../DeleteButton";
import APIList from "../../services/APIList";
import { useHistory } from "react-router-dom";

const ListTitle = ({ listID, name }) => {
  const api = new APIList("http://localhost:5000");
  const history = useHistory();
  return (
    <div className={Styles.root}>
      <H2>{name}</H2>
      <DeleteButton
        handleClick={() =>
          api.RemoveList(listID).then((response) => history.push("/"))
        }
      >
        Remove List
      </DeleteButton>
      <AddItemButton />
    </div>
  );
};

export default ListTitle;
