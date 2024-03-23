// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

//P: The parameters will take in an array of integers.

//R: A new array of integers will be returned. However, the lowest number in the array will be removed. If there are multiple numbers with the same value, the one in the lowest index will removed.

//E: If the array of [9,7,8,4,6] is called by the function, the array of [9,7,8,6] will be returned.

//P: A function is created to take in an array of integers. A method is utilized to make a copy of the original array without mutating it. The smallest value in the array is found and removed. A new array is returned without the smallest number.

function removeSmallest(numbers){
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
}
console.log(removeSmallest([9,7,8,4,6]))
