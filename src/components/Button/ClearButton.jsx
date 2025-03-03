import React from "react";
import "./Button.css";

function ClearButton(props) {
  return <div className="btn clearBtn">{props.children}</div>;
}

export default ClearButton;
