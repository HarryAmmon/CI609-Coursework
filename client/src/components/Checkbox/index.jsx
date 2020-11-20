import React from "react";

const Checkbox = ({ title, id }) => (
  <>
    <input type="checkbox" id={id} />
    <label for={id.toString()}>{title}</label>
  </>
);

export default Checkbox;
