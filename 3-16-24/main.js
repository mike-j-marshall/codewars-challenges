// There is a bus moving in the city which takes and drops some people at each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative. The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//P: The parameters will take in an array of integer pairs. The second value in the first pair in the array is 0.

//R: A number will be returned designating the number of people still on the bus. This number cannot be negative.

//E: If there are 7 people on the bus, but 3 get off on the last stop, the number 4 will be returned.

//P: A variable is declared to signify a number. A function is then used to loop through pairs of arrays. The first value in the arrayed pair represents the number of people getting on the bus, while the second represents the number getting off. The returned number signifies the amount of people still on the bus after the last stop.

var number = function (busStops) {
    let x = 0;
    busStops.forEach(a => x = x + a[0] - a[1]);
    return x
}