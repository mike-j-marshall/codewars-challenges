// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!" For this challenge "y" isn't considered a vowel.

//P: The paramaters will take in a string.

//R: The string taken into the function will be returned as a new string with all vowels removed.

//E: If the function takes in a string of "Landeskog", it will be returned as "Lndskg".

//P: Create a function that takes in a string. That string will be returned as a new string with all vowels removed.

function disemvowel(str){
    return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('Landeskog'))
