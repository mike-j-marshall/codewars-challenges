// Given an array of ones and zeroes, convert the equivalent binary value to an integer. The array can have any length, not just limited to 4.

//P: The parameters will take in an array of numbers, consisting of ones and zeroes.

//R: The converted equivalent binary value will be returned as an integer.

//E: If the array of [1, 0, 0, 1] is placed into the function, the number 9 will be returned.

//P: A function is created to take in an array of numbers comprised of ones and zeroes. The parseInt and arr.join methods are used to check the binary numbers, which are then returned as their corresponding integer.

const binaryArrayToNumber = arr =>
  parseInt(arr.join(''), 2)
console.log(binaryArrayToNumber([1,0,0,1]))
