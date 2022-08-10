import React, {Component} from "react";

import "./index.scss";
export default class Display extends Component {
    render() {
      return (
        <div className="display">
          <div className="display__current">
            {this.props.calculation}
          </div>
          <div className="display__result">{this.props.result}</div>
        </div>
      );
    }
  }
