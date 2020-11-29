import React from "react";
import { H2 } from "../Typography";
import AddItemButton from "../AddItemButton";
import Styles from "./ListTitle.module.scss";

const ListTitle = ({ name }) => (
  <div className={Styles.root}>
    <H2>{name}</H2>
    <AddItemButton />
  </div>
);

export default ListTitle;
