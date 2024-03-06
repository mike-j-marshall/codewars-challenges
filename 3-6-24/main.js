// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.

//P: The parameters will take in a list of strings.

//R: A list of strings will be returned, but a string will only be included if it consists of 4 letters.

//E: If the list of strings consists of ["John","Reginald","Joel","Rupert"], then ["John","Joel"] will be returned.

//P: A function is created to take in a list of strings. The filter and length methods are then utilized to return a list of strings (as long as the strings are comprised of 4 letters).

function friend(friends){
    return friends.filter(n => n.length === 4)
  }
console.log(friend("John","Reginald","Joel","Rupert"))
