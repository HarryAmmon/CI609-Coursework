import React, { useState } from "react";

const SelectInput = ({ placeholder, options, required }) => {
  const [option, setOption] = useState();
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
