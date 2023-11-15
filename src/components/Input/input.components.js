// useRAeducer was used here to manage state of input and validation - updates the state and re-render the component
import React from "react";

import "./input.styles.css";

const Input = ({
  label,
  placeholder,
  type,
  element,
  rows,
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
    ) : element === "select" ? (
      <select onChange={onChange} onBlur={onBlur} id={id} value={value}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : element === "range" ? (
      <div>
        <input
          onChange={onChange}
          onBlur={onBlur}
          type="range"
          id={id}
          min="0"
          max="3"
          step="1"
          list={id}
        />
        <datalist id={id}>
          {options.map((option) => (
            <option
              key={option.name}
              value={option.name}
              label={option.name}
            ></option>
          ))}
        </datalist>
      </div>
    ) : (
      <textarea
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        rows={rows || 7}
        value={value}
        placeholder={placeholder}
        style={{ whiteSpace: "pre-line" }}
      />
    );
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      {main}
    </div>
  );
};

export default Input;
