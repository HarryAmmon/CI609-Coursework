import React from "react";
import { H2 } from "../Typography";
import AddItem from "../AddItem";
import Styles from "./ListTitle.module.scss";

const ListTitle = ({ name }) => (
  <div className={Styles.root}>
    <H2>{name}</H2>
    <AddItem />
  </div>
);

export default ListTitle;
