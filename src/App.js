import React, { Component } from "react";

import "./assets/styles/index.scss";

import Display from "./components/Display";
import Controls from "./views/Controls";
import {getResult} from "./utils/helpers/calc.helpers"


class App extends Component {
  constructor() {
    super();

    this.state = {
      calculation: [],
      result: 0,
    };
  }

  handleCalculation = (calculation) => {
    this.setState({
      calculation,
    });
  };

  handleResult = (calculation) => {
    this.setState({
      result: getResult(calculation),
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display calculation={this.state.calculation} result={this.state.result} />
        <Controls handleResult={this.handleResult} handleCalculation={this.handleCalculation} result={this.state.result} />
      </div>
    );
  }
}

export default App;
