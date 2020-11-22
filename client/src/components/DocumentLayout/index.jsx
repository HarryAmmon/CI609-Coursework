import React from "react";
import Styles from "./DocumentLayout.module.scss";

const DocumentLayout = ({ children }) => (
  <div className={Styles.root}>{children}</div>
);

export default DocumentLayout;
