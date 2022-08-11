const getResult = (calculation) => {
  if (String(calculation).length === 0) {
    calculation = 0;
  } else {
    if (calculation[0] === "0") {
      calculation = calculation.slice(1);
    }
    calculation = eval(calculation);
  }
  return calculation;
};

export { getResult };
