var Letter = require("./letter.js");
var randomWords = require('random-words');



var Word = function() {
    var letters = [];
    // getting a random word from the node module random-words
    var word = randomWords();
    this.word = word;
    //splitting it with a space into an array
    var sp = word.split("");

    // for each letter (prob should be a foreach function) we call the letter constructor 
    // on it and then push that value into the letters array
    for (var i = 0; i < sp.length; i++) {
        var x = new Letter(sp[i]);
        letters.push(x);
    }

    this.letters = letters;

    this.showLetters = function() {

        // created a variable from the Letters to string property and logs
        // it for the user to see. 
        var theWord = this.letters.join(" ");
        console.log(theWord);
    }
}

module.exports = Word;