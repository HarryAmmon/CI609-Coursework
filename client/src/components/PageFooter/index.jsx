import React from "react";
import Styles from "./PageFooter.module.scss";
import { H1 } from "../Typography";

const PageFooter = () => (
  <footer className={Styles.root}>
    <div className={Styles.content}>
      <H1>Page Footer</H1>
    </div>
  </footer>
);

export default PageFooter;
