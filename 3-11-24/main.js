// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0. If the number is a multiple of both 3 and 5, only count it once.

//P: The parameters will take in a list of numbers, either positive or negative.

//R: The sum of all the multiples of 3 or 5 will be returned.

//E: If the number 10 is passed into the function, the number 23 will be returned.

//P: A function is created that takes in a list of positive or negative numbers. A variable is created to hold the sums. A for loop is used to parse through the numnbers. Each number is checked to confirm if it is a multiple of 3 or 5. Those numbers are added together and returned as a sum.

function threeOrFive(num){
    if (num < 0){
        return 0;
    }
    return (num % 3 === 0 || num % 5 === 0)
    ? num + threeOrFive(num - 1)
    : threeOrFive(num - 1);
}
console.log(threeOrFive(10))
