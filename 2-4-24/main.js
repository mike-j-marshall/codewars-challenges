// Implement the function "generateRange" which takes three arguments (start, stop, step) and returns the range of integers from "start" to "stop" (inclusive) in increments of "step".

//P: The paramaters will take in three arguments including start, stop, and step.

//R: A range of integers will be returned beginning with "start" and ending with "stop".

//E: A range of numbers is returned in increments of step, beginning with the smallest number and ending with the largest number.

//P: The function is created, which then takes in multiple integers to be returned as a range from start to stop.

function generateRange (min, max, step){
    let arr = [];
    for (let i = min; i <= max; i += step){
        arr.push (i);
    }
    return arr;
}
