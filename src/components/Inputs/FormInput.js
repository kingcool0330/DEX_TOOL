import React from "react";

const FormInput = ({ error, style, type, labelName = "" }) => {
  return (
    <div>
      {labelName && <label>{labelName}</label>}
      <div>
        <input className="warning" type={type} />
      </div>
      <div>
        <label></label>
      </div>
    </div>
  );
};

export default FormInput;
