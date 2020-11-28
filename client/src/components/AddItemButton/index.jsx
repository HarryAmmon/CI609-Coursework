import React from "react";
import Styles from "./AddItem.module.scss";
import { Link } from "react-router-dom";

const AddItemButton = () => (
  <Link to="addItem">
    <button className={Styles.root}>+</button>
  </Link>
);

export default AddItemButton;
