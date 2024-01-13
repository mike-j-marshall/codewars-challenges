// Create a function that takes an integer argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P: The function will take in either an even number or an odd number.

//R: Return either "Even" or "Odd" to the console depending on the number given.

//E: If we are given (2, 4, or 6 etc) print "Even" to the console.
// If we are given (3, 5, or 7 etc) pring "Odd" to the console.

//P: Make a function that takes in an even or odd integer
function evenOrOdd (number){
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(2))
// Print "Even" to the console