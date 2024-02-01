// Create a function that takes in a string. Alert if the string is a palindrome or not.

//P: The parameters will take in a string, which will then utilize appropriate methods to check if the string is a palindrome.

//R: The string will returned as "TRUE" if the methods confirm its status as a palindrome.

//E: The string 'kayak' is passed into the function, which is then returned as "TRUE", confinrming its status as a palindrome.

//P: A function is created to take in a string. That string is passed through the "str.split" method, ".reverse" method, and ".join" method to check its status as a palindrome. The string is then returned "TRUE" if it is a palindrome.

const palindromeCheck = str => alert (str === str.split ('').reverse().join(''))

palindromeCheck ('racecar')
// RETURNS TRUE VIA ALERT
