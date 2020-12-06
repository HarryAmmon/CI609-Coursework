import React from "react";
import { Link } from "react-router-dom";
import Styles from "./SideBar.module.scss";
import { P } from "../Typography";

const SideBar = ({ lists }) => {
  return (
    <>
      {lists ? (
        <nav className={Styles.root}>
          {lists.map((item) => (
            <Link to={`/${item._id}`} key={item._id}>
              <button>{item.title}</button>
            </Link>
          ))}
        </nav>
      ) : (
        <P>Failed to load</P>
      )}
    </>
  );
};

export default SideBar;
