import React from "react";
import "./Button.css";

function isOpeartor(val) {
  return !isNaN(val) || val === "." || val === "=";
}

function Button(props) {
  return (
    <button
      className={`btn ${isOpeartor(props.children) ? null : "operator"}`}
      onClick={() => props.onClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
