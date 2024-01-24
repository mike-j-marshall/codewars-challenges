// Declare a variable, assign it a string of multiple words. Replace every "jr. dev" with "software engineer", and print it to the console.

//P: A declared variable will be assigned a string to be modified.

//R: The string will appropriately modified and printed to the console with "jr. dev" replaced by "software engineer".

//E: "I want to be a jr.dev" should be printed to the console as "I want to be a software engineer".

//P: Declare a string that includes the words "jr. dev". Print to the console and swap "jr. dev" with "software engineer".

let strToChange = 'I am looking for jr. dev positions.'
console.log (strToChange.replaceAll('jr. dev','software engineering'))
