import React from "react";
import Styles from "./Checkbox.module.scss";

const Checkbox = ({ id, name, value, onChange }) => (
  <label htmlFor={id}>
    <span className={Styles.checkboxInput}>
      <input
        type="checkbox"
        id={id}
        className={Styles.checkboxInput}
        name={name}
        checked={value}
        onChange={onChange}
      />
      <span className={Styles.checkboxControl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d=" M1.73 12.91l6 6.37L22.79 4.59"
          />
        </svg>
      </span>
    </span>
  </label>
);

export default Checkbox;
