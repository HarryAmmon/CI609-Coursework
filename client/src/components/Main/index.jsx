import React from "react";
import Styles from "./main.module.scss";

const Main = ({ children }) => <main className={Styles.root}>{children}</main>;

export default Main;
