// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement the function which takes an array containing the names of people that like an item.

//P: The parameters will take in an array of strings, comprised of peoples' names. If no strings are placed in the array, it will be returned accordingly.

//R: Text will be returned corresponding with the names placed in the array.

//E: If ["Mike","Aaron","Hayden"] is placed into the array, "Mike, Aaron and Hayden like this" will be returned.

//P: A function is created to take in an array of strings. A loop is then used to iterate through the array. The length method is used to parse through the names and return the appropriate text.

function likes(names) {
    if (names.length == 0) {
      return "no one likes this";
    } else if (names.length == 1) {
      return names[0] + " likes this";  
    } else if (names.length == 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (names.length == 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
  }
console.log(likes(["Mike","Aaron","Hayden"]))