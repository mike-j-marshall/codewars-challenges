// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

//P: The parameters will take in a a string of numbers.

//R: If 4 digits or 6 digits are placed into the function, "true" will be returned. If any amount of numbers other than 4 or 6 are placed into the function, "false" will be returned.

//E: If the digits "2996" are placed into the function, "true" will be returned.

//P: A function is created to take in a string of digits. The strings is then parsed to discern whether it contains exactly either 4 or 6 digits, or if any letters are included. If the string contains 4 or 6 digits and no letters, "true" is returned. Otherwise "false" will be returned.

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }
console.log(validatePIN(2996))
