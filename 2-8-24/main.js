// Complete the solution so that it reverses the string passed into it: 'palindrome' => 'emordnilap'

//P: The paramaters will take in a string with the purpose of reversing it.

//R: The first split method returns the string with the characters separated. The reverse method then returns those seperated characters backwards. The join method then rejoins the characters in reverse.

//E: The string 'bamboozle' is split, reversed, and joined to be returned and console logged as 'elzoobmab'.

//P: Create a function to take in a string. The string (via methods) is split, reverse, and joined to be returned and console logged as its reversed iteration.

function solution (str){
    return str.split('').reverse().join('');
}
console.log (solution('palindrome'))
