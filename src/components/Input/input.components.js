// useRAeducer was used here to manage state of input and validation - updates the state and re-render the component
import React from "react";

import "./input.styles.css";

const Input = ({
  label,
  placeholder,
  type,
  element,
  errorText,
  options,
  onChange,
  onBlur,
  value,
  id,
}) => {
  // This defines the input for the form - either imput or select
  const main =
    element === "input" ? (
      <input
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    ) : (
      <select onChange={onChange} onBlur={onBlur} id={id} value={value}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      {main}
      {/* {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>} */}
    </div>
  );
};

export default Input;
