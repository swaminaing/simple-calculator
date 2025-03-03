import React from "react";
import "./Button.css";

function ClearButton(props) {
  return (
    <button className="btn clearBtn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ClearButton;
