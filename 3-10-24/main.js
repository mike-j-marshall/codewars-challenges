// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

//P: The parameters will take in a string. Each word within the string will include one number between 1 and 9.

//R: A string will be returned, with the words in order corresponding to their respective numbers.

//E: If the string "is2 Thi1s T4est 3a" is called by the function, "Thi1s is2 3a T4est" will be returned.

//P: A function is created to take in a string of words. Arr is declared to utilize the split method. R is declared to generate an array. A forEach loop is then used to iterate through the words to parse the numbers from their words. Sort, map, splice, and join methods are utilized to return the words in the appropriate order.

function order(words){
    let arr = words.split(' ')
    let r = []
  
    arr.forEach(word=>{
      let x = word.split('')
      let num = x.find(el=>parseInt(el))
      r.push([word,parseInt(num)]) 
    })
  
    r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
    return r.join(' ')
  }
console.log(order("is2 Thi1s T4est 3a"))
