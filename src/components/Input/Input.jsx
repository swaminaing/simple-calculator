import React from "react";
import "./Input.css";

function Input(props) {
  return <div className="form-control">{props.children}</div>;
}

export default Input;
