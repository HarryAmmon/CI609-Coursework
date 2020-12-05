import React from "react";
import { Link } from "react-router-dom";
import Styles from "./SideBar.module.scss";
const SideBar = ({ lists }) => {
  return (
    <>
      <nav className={Styles.root}>
        {lists.map((item) => (
          <Link to={`/${item._id}`}>
            <button>{item.title}</button>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default SideBar;
