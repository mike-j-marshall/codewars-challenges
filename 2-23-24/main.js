// Create a function that takes in a word. Return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//P: The paramaters will take in a string for the purpose of returning its middle character or characters, depending on its status of even or odd.

//R: One or two characters will be returned. One letter if the word is odd, two letters if it is even.

//E: If the word "middle" is inputted, the letters "dd" will be returned.

//P: A function is created that takes in a string. The substr() method is used to extract length characters from the string. The ceil() method is then used to round a number up to the nearest integer. Length() methods are then used to determine the string's status of odd or even. The middle character/s are then returned.

function getMiddle (str){
    return str.substr (Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle("middle"))
