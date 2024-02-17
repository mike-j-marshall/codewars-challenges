// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels (but not y). The input string will only consist of lower case letters and/or spaces.

//P: The paramaters will take in a string. The input string can only contain lower case letters and/or spaces.

//R: The total count of vowels within the inputted string will be returned as a number.

//E: If the string of "avalanche" is passed into the function, the number 4 will be returned. 

//P: A function is created to take in a string consisting of lower case letters and/or spaces. Using the str.match method and length method, a number will be returned corresponding to the number of vowels in the string.

function getCount(str){
    return (str.match(/[aeiou]/ig)||[]).length;
}
console.log(getCount('avalanche'))
