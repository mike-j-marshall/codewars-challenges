// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

//P: The parameters will take in a string of Roman numerals to be converted to an integer.

//R: A number will be returned corresponding to the string of Roman numerals taken in by the function.

//E: If the string of "L" is entered into the function, the number 50 will be returned.

//P: A function is created to take in a Roman numeral as a string. That string is then iterated through a loop, which returns the appropriate number.

function solution (roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++){
      const currentSymbol = romanNumerals[roman[i]];
      const nextSymbol = romanNumerals[roman[i + 1]];
      if (nextSymbol && currentSymbol < nextSymbol){
        result -= currentSymbol;
      } else {
        result += currentSymbol;
      }
    }
        return result;
  }
