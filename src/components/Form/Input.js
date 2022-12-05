import React from "react";

function Input({ label, htmlfor, value, name, type, onChange }) {
  return (
    <label htmlFor={htmlfor}>
      {label}
      <input
        required
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
