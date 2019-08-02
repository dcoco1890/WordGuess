var inquirer = require("inquirer");
var Word = require("./word.js");
var ui = new inquirer.ui.BottomBar();


function playGame() {

    var cWord = new Word;
    let chars = [];

    for (var i = 0; i < cWord.letters.length; i++) {

        chars.push(cWord.letters[i].character);
    }
    // cWord.showLetters();
    // cWord.letters[0].isGuessed = true;
    cWord.showLetters();

    ui.log.write('enter ONLY a single character letter ("a" OR "b" etc..)');
    inquirer.prompt([{
        name: "userInput",
        type: "input",
        message: "Make a guess!",
    }])
}
console.log("Welcome to Word Guess!\n----------------------------------\n");
playGame();