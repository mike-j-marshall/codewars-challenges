// Given a string of words, return the length of the shortest word(s).

//P: The parameters will take in a string of words.

//R: The length of the shortest word within the string will be returned.

//E: A function is created to take in a string of words. Using the Math.min method, the split method, the map method, and length method, the length of the shortest word(s) will be returned.

function shortestWord(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
console.log(shortestWord('Fear is the mind killer'))
