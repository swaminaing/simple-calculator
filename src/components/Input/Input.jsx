import React from "react";
import "./Input.css";

function Input(props) {
  return <input value={props.value} className="form-control" type="text" />;
}

export default Input;
