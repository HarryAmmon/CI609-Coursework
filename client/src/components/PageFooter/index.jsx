import React from "react";
import Styles from "./PageFooter.module.scss";

const PageFooter = () => {
  const date = new Date();
  return (
    <footer className={Styles.root}>
      <div className={Styles.content}>
        <small className={Styles.copy}>
          &copy; Harry Ammon {date.getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default PageFooter;
