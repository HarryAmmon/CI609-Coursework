import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./SideBar.module.scss";
import { P } from "../Typography";
// import APIList from "../../services/APIList";

const SideBar = ({ lists }) => {
  // const [lists, setLists] = useState([]);
  // useEffect(() => {
  //   const api = new APIList("http://localhost:5000");
  //   api.GetListsIDAndTitle().then((response) => {
  //     setLists(response);
  //   });
  // }, []);
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
