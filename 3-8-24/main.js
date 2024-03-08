// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

//P: The parameters will take in two numbers. One starting number and one ending number that can be either positive or negative.

//R: The total amount of numbers between the two given numbers will be returned EXCEPT for any numbers that include the number 5.

//E: If the numbers 1 and 9 are passed into the function, the result of 8 will be returned.

//P: A function is created to take in two positive or negative integers. A loop is then used to iterate through the range of two numbers with the purpose of removing any number that includes the digit 5. The count is then returned.

function noFives(start, end){
    let count = 0
    for (let i = start; i <= end; i++){
        if (!/5/.test(i)){
            count++
        }
    }
    return count
}
console.log(noFives(1,100))
// 81 is returned