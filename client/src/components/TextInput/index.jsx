import React, { useState } from "react";

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
    />
  );
};

export default TextInput;
