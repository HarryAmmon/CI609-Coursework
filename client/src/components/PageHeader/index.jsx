import React from "react";
import Styles from "./PageHeader.module.scss";
import { H1 } from "../Typography";

const PageHeader = ({ appTitle }) => (
  <header className={Styles.root}>
    <div className={Styles.docWidth}>
      <H1>{appTitle}</H1>
    </div>
  </header>
);

export default PageHeader;
