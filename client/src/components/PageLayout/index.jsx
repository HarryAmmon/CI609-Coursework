import React from "react";
import Styles from "./PageLayout.module.scss";

const PageLayout = ({ children }) => (
  <div className={Styles.root}>{children}</div>
);

export default PageLayout;
