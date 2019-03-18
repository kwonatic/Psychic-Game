
//number of right guesses
var numberWinText = document.getElementById("numberWin");
//number of accumulated wrong tries after guess reaches 0

var numberLoseText = document.getElementById("numberLose");
//available choices in array
//i need to make computer randomly choses one each time game starts
var answer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//remaining # of guesses
var guessText = document.getElementById("guess");

var userInput;

//computer chooses a random character
//random character is chosen from array




//user gets 10 attempts
guess = 10;
numberWin = 0;
numberLose = 0;
console.log(numberLose)
//this is where computer decide which character to be an answer

//if guess reaches 0, ++numberLose
if (guess > 0) {
    numberLoseText.textContent = "loses: " + numberLose;


    var computerGuess = answer[Math.floor(Math.random() * answer.length)];

    document.onkeyup = function (event) {
        //user input    
        userInput = event.key;

        console.log("computerGuess: " + computerGuess);
        console.log("userInput: " + userInput);
        console.log("remaining guess: " + guess);
        console.log("numberWin: " + numberWin);
        //if right, ++numberWin, aka, if answer = userinput in checkAnswer function.
        if (userInput === computerGuess) {
            ++numberWin;
            //if right, computer chooses new random character
            numberWinText.textContent = "wins: " + numberWin;
            // console.log(numberWin);
            return;
        } else {

            //if wrong, put user input to guess,


            //if wrong, --guess
            --guess;
            guessText.textContent = "remaining guess: " + guess;
            if (guess < 0) {
                --numberLose;
            }

        }
    }
    numberWinText.textContent = "wins: " + numberWin;
    numberLoseText.textContent = "loses: " + numberLose;

} else {
    guess = 10;
    // return;
}
numberWinText.textContent = "wins: " + numberWin;
numberLoseText.textContent = "loses: " + numberLose;




//display which character user tried
//everytime user inputs, --guess
//compares whether user input is right or wrong
//i'll name the process as checkAnswer









//if guess reaches 0, computer chooses new random 
