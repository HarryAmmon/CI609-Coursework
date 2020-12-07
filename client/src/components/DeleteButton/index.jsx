import React from "react";

import Styles from "./DeleteButton.module.scss";

const DeleteButton = ({ handleClick, children }) => {
  return (
    <button className={Styles.root} type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default DeleteButton;
