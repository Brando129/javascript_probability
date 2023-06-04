// Create a function that takes three arguments prob,
// prize, pay and returns true if prob * prize > pay;
// otherwise return false.

function isWorthIt(prob, prize, pay){
    //   Returns true if prob * prize > pay, otherwise false.
    
    //   Args:
    //     prob: The probability of winning the prize.
    //     prize: The value of the prize.
    //     pay: The amount of money paid to enter the contest.
    
    //   Returns:
    //     True if prob * prize > pay, otherwise False.
    var expected_value = prob * prize
    return expected_value > pay
}


console.log(isWorthIt(12, 2000, 60))