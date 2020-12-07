import React from "react";
import Styles from "./AddItem.module.scss";
import { Link } from "react-router-dom";

const AddItemButton = () => (
  <Link to="addItem">
    <button className={Styles.root}>Add Item</button>
  </Link>
);

export default AddItemButton;
