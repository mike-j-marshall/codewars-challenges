// How do you take any given number and make it negative?

//P: The paramaters will take in any number in order to convert it to a negative number.

//R: The number will be returned as its negative counterpart.

//E: If the number 17 is taken in as a number, it will be returned as -17.

//P: A function is created to take in any given number for the purpose of returning it as its negative counterpart.

function makeNegative (num){
    return -Math.abs (num);
}
