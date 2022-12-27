import React from "react";
import "./Option.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputoption">
      <Icon color={color} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
