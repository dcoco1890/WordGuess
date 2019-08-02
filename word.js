var Letter = require("./letter.js");
var randomWords = require('random-words');



var Word = function() {
    var letters = [];
    // getting a random word from the node module random word
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

        // this is an array to hold the word we're going to show the user. Depending on whether
        // or not the letter has been guessed, we either push a "_", or the the actual letter
        // for (var i = 0; i < letters.length; i++) {
        //     if (this.letters[i].isGuessed === true) {

        //     }
        // }
        var theWord = this.letters.join(" ");
        console.log(theWord);
    }



}

// var g = new Word;
// g.letters[0].isGuessed = true;
// console.log(g.letters[0].character);
// g.showLetters();
module.exports = Word;