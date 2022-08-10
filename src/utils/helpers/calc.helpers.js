const getResult = (calculation) => {
    if (String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = eval(calculation);
    }
    return calculation;
  };

  export { getResult };