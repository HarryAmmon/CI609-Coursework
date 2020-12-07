import React, { useState } from "react";
import Styles from "./TextInput.module.scss";

const TextInput = ({ title, required }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      autoComplete={"yes"}
      placeholder={title}
      value={value}
      required={required}
      onChange={(event) => setValue(event.target.value)}
      className={Styles.root}
    />
  );
};

export default TextInput;
