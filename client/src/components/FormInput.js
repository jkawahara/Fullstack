// *** Include Modules: npm (react)
import React from "react";

export function FormInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" size="30" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn-deafult">
      {props.children}
    </button>
  );
}
