// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//P: The paramaters will take in a string consisting of letters comprised of "A","T","C", and "G".

//R: A string of letters will be returned that complement the inputted string.

//E: If a string of "ATTGC" is placed into the function, a string of "TAACG" will be returned.

//P: A function is created to take in a string. Using the replace method, certain letters are returned with their complementary letters.

function DNAStrand (dna){
    return dna.replace(/./g, function(c){
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}
console.log(DNAStrand('ATTGC'))
