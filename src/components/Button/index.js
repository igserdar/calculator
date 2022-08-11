import React from "react";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={"controls__item " + props.color}
      data-value={props.value}
    >
      {props.name}
    </div>
  );
};

export default Button;
