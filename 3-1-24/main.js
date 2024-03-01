// Write a function called "maskify", which changes all but the last four characters into '#'.

//P: The parameters will take in a series of numbers or a string, with the purpose of only the last four characters being visible.

//R: A series of characters will be returned, with only the last four being visible.

//E: If the numbers "19218299692" are called by the function, only "9292" will be visible.

//P: A function is created to take in a series of characters (numbers or string). The slice and replace methods are used to parse through the characters, with the purpose of masking all but the final four characters.

function maskify (cc){
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify(19218299692))
