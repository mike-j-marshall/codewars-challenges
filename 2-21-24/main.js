// Square every digit of a number and concatenate them. The function accepts an integer and returns an integer.

//P: The paramaters will take in numbers for the purpose of being squared and concatenated.

//R: A series of squared and concatenated numbers will be returned.

//E: If the series of numbers is 2,4,7 it will be returned as 41649

//P: A function is created to take in numbers. After using the split, map, and join methods, the numbers are squared and returned as a concatenated string.

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) {return val * val;}).join(''));
}
console.log(squareDigits(247))
