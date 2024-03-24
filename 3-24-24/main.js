// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//P: The parameters will take in an array of strings.

//R: Each string will be returned with its corresponding number chronologically. 

//E: If the function takes in an array of ["D","A","W","G"], the array of ["1: D","2: A","3: W","4: G"] will be returned.

//P: A function is created to take in an array of strings. The map method is used to parse through the array and return the prepended strings with their corresponding numbers.

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}