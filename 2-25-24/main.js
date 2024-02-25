// Given an integral number, determine if it's a square number.

//P: The parameters will take in a number, for the purpose of determining its status as a perfect square.

//R: Either true or false will be returned, depending on whether the number is a perfect square or not.

//E: If the number 196 is placed into the function, it will be returned true.

//P: A function is created to take in a number. Using the Math.sqrt method, either true or false will be returned depending on the number's status as a perfect square.

function perfectSquare (n){
    return Math.sqrt(n) % 1 === 0;
}
console.log(perfectSquare(196))
