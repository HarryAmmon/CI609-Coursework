import React from "react";

import Styles from "./DeleteButton.module.scss";

const DeleteButton = ({ id, handleClick }) => {
  return (
    <button className={Styles.root} type="button" onClick={handleClick}>
      Remove
    </button>
  );
};

export default DeleteButton;
