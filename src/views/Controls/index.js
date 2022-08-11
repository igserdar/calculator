import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./index.scss";
import { getResult } from "../../utils/helpers/calc.helpers";

export default function Display(props) {
  const [calculation, setCalculation] = useState([]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyDown);
  }, [calculation]);

  useEffect(() => {
    props.handleCalculation(calculation);
  }, [calculation]);
  useEffect(() => {
    setCalculation(props.result?.toString().split(""));
  }, [props.result]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.handleResult(calculation.join(""));
      window.removeEventListener("keyup", handleKeyDown);
    }

    if (e.key === "Backspace") {
      let removeLast = [...calculation];
      removeLast.splice(removeLast.length - 1, 1);
      setCalculation(removeLast);
      window.removeEventListener("keyup", handleKeyDown);
    }

    if (
      (e.key >= 0 && e.key <= 9) ||
      e.key === "." ||
      e.key === "*" ||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "-"
    ) {
      if (isNaN(e.key) && isNaN(calculation[calculation.length - 1])) {
        return;
      }
      setCalculation([...calculation, e.key]);
      window.removeEventListener("keyup", handleKeyDown);
    }
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setCalculation([]);
        props.handleResult([]);

        break;
      case "=":
        props.handleResult(calculation.join(""));
        break;
      case "posNeg":
        let posNeg = [[...calculation].join("") * -1];
        setCalculation(posNeg);

        break;
      case "perc":
        let calc = getResult(calculation.join(""));
        let percentage = [calc * 0.01];
        setCalculation(percentage);
        break;
      case "back":
        let removeLast = [...calculation];
        removeLast.splice(removeLast.length - 1, 1);
        setCalculation(removeLast);

        break;

      default:
        if (isNaN(value) && isNaN(calculation[calculation.length - 1])) {
          break;
        }
        setCalculation([...calculation, value]);
        break;
    }
  };

  return (
    <div className="controls">
      <Button
        onClick={handleClick}
        name="%"
        value="perc"
        color="controls__item--darker"
      />

      <Button
        onClick={handleClick}
        name="+/-"
        value="posNeg"
        color="controls__item--darker"
      />
      <Button
        onClick={handleClick}
        name="C"
        value="clear"
        color="controls__item--darker"
      />
      <Button
        onClick={handleClick}
        name="/"
        value="/"
        color="controls__item--orange"
      />

      <Button onClick={handleClick} name="7" value="7" />
      <Button onClick={handleClick} name="8" value="8" />
      <Button onClick={handleClick} name="9" value="9" />
      <Button
        onClick={handleClick}
        name="x"
        value="*"
        color="controls__item--orange"
      />

      <Button onClick={handleClick} name="4" value="4" />
      <Button onClick={handleClick} name="5" value="5" />
      <Button onClick={handleClick} name="6" value="6" />
      <Button
        onClick={handleClick}
        name="-"
        value="-"
        color="controls__item--orange"
      />
      <Button onClick={handleClick} name="1" value="1" />
      <Button onClick={handleClick} name="2" value="2" />
      <Button onClick={handleClick} name="3" value="3" />

      <Button
        onClick={handleClick}
        name="+"
        value="+"
        color="controls__item--orange"
      />

      <Button onClick={handleClick} name="0" value="0" />
      <Button onClick={handleClick} name="." value="." />
      <Button onClick={handleClick} name="&#8592;" value="back" />
      <Button
        id="equal"
        onClick={handleClick}
        name="="
        value="="
        color="controls__item--green"
      />
    </div>
  );
}
