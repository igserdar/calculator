import React from "react";

import "./index.scss";

const Display = (props) => {
  return (
    <div className="display">
      <div className="display__current">{props.calculation}</div>
      <div className="display__result">{props.result}</div>
    </div>
  );
};

export default Display;
