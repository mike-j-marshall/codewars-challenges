// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//P: The parameters will take in a string of words.

//R: The reversed words will be returned (along with all spaces in the string).

//E: If the string of "MacKinnon is winning the Hart trophy!" is called by the function, "nonniKcaM si gninniw eht traH !yhport" will be returned.

//P: A function is created to take in a string of words. That function utilizes several methods to return the string and its spaces in reverse (split, map, reverse, and join).

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }
console.log(reverseWords("MacKinnon is winning the Hart trophy!"))
