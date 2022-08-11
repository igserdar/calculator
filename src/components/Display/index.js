import React from "react";

import "./index.scss";
import Loader from "../Loader";

const Display = (props) => {
  return (
    <div className="display">
      <div className="display__current">
        {props.loading ? <Loader /> : props.calculation}
      </div>
      <div className="display__result">
        {props.loading ? <Loader /> : props.result}
      </div>
    </div>
  );
};

export default Display;
