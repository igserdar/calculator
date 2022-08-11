import React, { useEffect, useState } from "react";

import "./assets/styles/index.scss";

import Display from "./components/Display";
import Controls from "./views/Controls";
import { getResult } from "./utils/helpers/calc.helpers";

const App = () => {
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState([]);

  const handleCalculation = (calculation) => {
    setCalculation(calculation);
  };

  const handleResult = (calculation) => {
    setResult(getResult(calculation));
  };

  return (
    <div className="calculator">
      <Display calculation={calculation} result={result} />
      <Controls
        handleResult={handleResult}
        handleCalculation={handleCalculation}
        result={result}
      />
    </div>
  );
};

export default App;
