import React from "react";
import Styles from "./SideBar.module.scss";
const SideBar = () => (
  <nav className={Styles.root}>
    <a href="/">List Item 1</a>
    <a href="/">List Item 2</a>
    <a href="/">List Item 3</a>
  </nav>
);

export default SideBar;
