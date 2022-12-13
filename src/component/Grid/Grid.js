import React from "react";
import "./Grid.css";

const Grid = (props) => {
  return (
    <div className="cont1">
      <div className="head">{props.title}</div>

      <div className="child">{props.children}</div>
    </div>
  );
};

export default Grid;
