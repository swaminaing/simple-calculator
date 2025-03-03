import React from "react";
import "./Button.css";

function isOpeartor(val) {
  return !isNaN(val) || val === "." || val === "=";
}

function Button(props) {
  return (
    <div className={`btn ${isOpeartor(props.children) ? null : "operator"}`}>
      {props.children}
    </div>
  );
}

export default Button;
