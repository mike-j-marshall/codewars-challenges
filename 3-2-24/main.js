// Given two integers "a" and "b", which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return "a" or "b".

//P: The parameters will take in two numbers, either positive or negative.

//R: The sum will be returned of all of the numbers residing between the two given integers.

//E: If the function takes in the numbers "1" and "2", the number "3" will be returned.

//P: A function is created to take in two numbers, either positive or negative. The variables "min" and "max" and declared to utilize the Math.min and Math.max methods. A sum of all the numbers residing between the two arguments is then returned.

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
console.log(GetSum(1, 2))
