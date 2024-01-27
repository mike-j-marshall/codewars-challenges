// Create a function that returns rock, paper, or scissors as randomly as possible.

//P: The parameters will include a randomly generated number between 0 and .99.

//R: Either 'rock', 'paper', or 'scissors' will be returned depending on the randomly generated number.

//E: If the number .29 is randomly generated, the string 'rock' will be returned.

//P: A function is created to randomly generate a number between 0 and .99, which is then returned as the corresponding string of either 'rock', 'paper', or 'scissors'.

function rockPaperScissors (){
    let random = Math.random()
    if (random < .33){
        return 'rock'
    }else if (random < .66){
        return 'paper'
    }else {
        return 'scissors'
    }
}