// Make a function that can take any non-negative integer as an argument and return it with its digits in descending order.

//P: The paramaters will take in any series of positive numbers.

//R: The numbers will be returned in descending order, beginning with the largest number and ending with the smallest.

//E: If the function takes in the number 73957220, the number will be returned as 97753220.

//P: A function is created to take in a series of positive integers. The string of numbers is parsed, split, sorted, reversed, and joined to be returned in descending order.

function descendingOrder(num){
    return parseInt(String(num).split('').sort().reverse().join(''))
}
console.log(descendingOrder(73957220))
