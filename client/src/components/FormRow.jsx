import React from "react";

const FormRow = ({ type, labelText, name, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
