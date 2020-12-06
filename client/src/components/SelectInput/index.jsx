import React, { useState } from "react";

const SelectInput = ({ placeholder, options }) => {
  const [option, setOption] = useState();
  console.log(`Options: ${options}`);
  return (
    <select
      placeholder={placeholder}
      value={option}
      onChange={(event) => setOption(event.target.value)}
    >
      {options.map((option) => (
        <option value={option._id} key={option._id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
