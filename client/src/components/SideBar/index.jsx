import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./SideBar.module.scss";
import { P } from "../Typography";

const SideBar = ({ lists }) => {
  return (
    <>
      {lists ? (
        <nav className={Styles.root}>
          {lists.map((item) => (
            <NavLink
              to={`/${item._id}`}
              key={item._id}
              activeClassName={Styles.match}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      ) : (
        <P>Failed to load</P>
      )}
    </>
  );
};

export default SideBar;
