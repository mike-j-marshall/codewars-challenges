// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//P: The parameters will take in both integers and strings for the purpose of filtering out the strings.

//R: A list of numbers will be returned.

//E: If the function takes in a list of [8,'M', 29,'L', 92, 'X'], the numbers [8, 29, 92] will be returned.

//P: A function is created to take in a list of positive numbers and strings. Using the filter method, the strings are filtered out to return a list of numbers.

function filterList (l){
    return l.filter (function(v) {return typeof v == 'number'})
}
console.log(filterList([8,'M',29,'L',92,'X']))
