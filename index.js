var inquirer = require("inquirer");
var Word = require("./word.js");
var ui = new inquirer.ui.BottomBar(); //gives the user a reminder to only enter single char
const regg = /\b[a-z]/; // regex to match a single char at the beginning of a string
var cWord = new Word;
let chars = [];
let remainingGuesses = 5;

// pushes the characters from the letter into an array
for (var i = 0; i < cWord.letters.length; i++) {
    chars.push(cWord.letters[i].character);
};

// this is what gets passed into the inquirer prompt
// made the code a little easier to read / write
var questions = [{
    name: "userInput",
    type: "input",
    message: "Make a guess!",
    validate: (answer) => {
        var pass = answer.match(regg);
        if (pass) {
            return true;
        } else {
            return "Please enter only a single lowercase character";
        }
    }
}];

function reset() {
    var cWord = new Word;
    let chars = [];
    let remainingGuesses = 5;
    for (var i = 0; i < cWord.letters.length; i++) {
        // pushes the characters from the letter into an array
        chars.push(cWord.letters[i].character);
    }

    playGame();

}



// main game function
function playGame() {

    cWord.showLetters();
    ui.log.write('enter ONLY a single character letter ("a" OR "b" etc..)');

    if (remainingGuesses > 0) {

        inquirer.prompt(questions).then(answers => {
            console.log('chars :', chars);
            // if the caracters array includes the anser, then run the correct check
            // function to find it and switch the letters
            if (chars.includes(answers.userInput)) {
                for (var i = 0; i < chars.length; i++) {
                    cWord.letters[i].correctCheck(answers.userInput)
                }
                console.log("Good Job!\n");
            } else {
                console.log("Bad Job!\n");
                remainingGuesses -= 1;
                console.log(`${remainingGuesses} guesses left\n`);
            }

            // cWord.showLetters();
            playGame();
        });
    };

}




console.log("Welcome to Word Guess!\n----------------------------------\n");
playGame();