// Create an array of numbers. Sum all of the numbers. Alert the sum.

//P: An array is declared, which includes an unspecified amount of numbers.

//R: All of the numbers are added and returned as their total sum.

//E: An array of [8, 29, 92, 96] is created and the result is returned as a sum of 225.

//P: A set of numbers is declared as an array. Those numbers are all added, then returned as the sum.

let nums = [10, 20, 30, 50]
alert (nums.reduce ( (acc, c) => acc + c, 0) )