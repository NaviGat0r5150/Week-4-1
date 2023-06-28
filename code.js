//a function to play craps on my index page
function playCraps() {
    console.log("playCraps() started");
    //step one-roll 2 six sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is" + die1);
    console.log("die2 is" + die2);
    //step 1b print results on screen
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //step two-calculate the sum of die 1 and 2
    var diceSum = die1 + die2;
    console.log("The sum of the dice is:" + diceSum);
    document.getElementById("diceSum").innerHTML = diceSum;
    /*if(conditions fopr true){
        do this if conditions are true
    }else if (another conditions for true){
        do this if esle if condiots are true
    }else{
        so this if none are true
    }*/
    //step three- does the sum equal 7 or 11, meaning are you a loser
    if (diceSum == 7 || diceSum == 11) {
        document.getElementById("gameRes").innerHTML = "Ha ha! You lose!";
    }else if (die1 == die2 && die1 % 2 == 0) {
        //step four-did the dice come up double, are they even, if so, you win
        document.getElementById("gameRes").innerHTML = "You Win! Great Job!";
    }else{
        //step five-otherwise push}
        document.getElementById("gameRes").innerHTML =
            "You did not lose, but you did not win. Please play again";
    }
}
