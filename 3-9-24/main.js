// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//P: The parameters will take in a number.

//R: The sum of the absolute value of each of the number's decimal digits will be returned.

//E: If the number 29 is placed into the function, the number 11 will be returned.

//P: A function is created to take in a number. Using the Math.abs method, the number is iterated through a loop to utilize the Math.floor method. The absolute sum of those numbers is then returned.

function sumDigits(num){
    var i = 0;
    var sum = 0;
    num = Math.abs(num)
    while(num != 0)
{
    sum += num % 10
    num = Math.floor(num/10)
}
    return sum
}
console.log(sumDigits(29))
