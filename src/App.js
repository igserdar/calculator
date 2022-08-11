import React, { useEffect, useState } from "react";

import "./assets/styles/index.scss";

import Display from "./components/Display";
import Controls from "./views/Controls";
import { getResult } from "./utils/helpers/calc.helpers";

const App = () => {
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCalculation = (calculation) => {
    setCalculation(calculation);
  };

  const handleResult = (calculation) => {
    if (calculation.length === 0) {
      setResult([]);
    } else {
      setLoading(true);
      fetch("https://e-solak.jotform.dev/intern-api/calculate-expression", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expression: calculation }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data.content);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="calculator">
      <Display loading={loading} calculation={calculation} result={result} />
      <Controls
        handleResult={handleResult}
        handleCalculation={handleCalculation}
        result={result}
      />
    </div>
  );
};

export default App;
