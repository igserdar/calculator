const getResult = (calculation) => {
  let answer = 0;
  if (String(calculation).length === 0) {
    calculation = 0;
  } else {
    if (calculation[0] === "0") {
      calculation = calculation.slice(1);
    }
    let calc = parseCalculationString(calculation);
    answer = calculate(calc);
    return answer;
  }
  return answer;
};

const parseCalculationString = (s) => {
  var calculation = [],
    current = "";
  for (var i = 0, ch; (ch = s.charAt(i)); i++) {
    if ("^*/+-".indexOf(ch) > -1) {
      if (current == "" && ch == "-") {
        current = "-";
      } else {
        calculation.push(parseFloat(current), ch);
        current = "";
      }
    } else {
      current += s.charAt(i);
    }
  }
  if (current != "") {
    calculation.push(parseFloat(current));
  }
  return calculation;
};

const calculate = (calc) => {
  var ops = [
      { "^": (a, b) => Math.pow(a, b) },
      { "*": (a, b) => a * b, "/": (a, b) => a / b },
      { "+": (a, b) => a + b, "-": (a, b) => a - b },
    ],
    newCalc = [],
    currentOp;
  for (var i = 0; i < ops.length; i++) {
    for (var j = 0; j < calc.length; j++) {
      if (ops[i][calc[j]]) {
        currentOp = ops[i][calc[j]];
      } else if (currentOp) {
        newCalc[newCalc.length - 1] = currentOp(
          newCalc[newCalc.length - 1],
          calc[j]
        );
        currentOp = null;
      } else {
        newCalc.push(calc[j]);
      }
    }
    calc = newCalc;
    newCalc = [];
  }
  if (calc.length > 1) {
    console.log("Error: unable to resolve calculation");
    return calc;
  } else {
    return calc[0];
  }
};

export { getResult };
