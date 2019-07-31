var Letter = function(character) {
    this.character = character;
    this.isGuessed = false;

    this.correctCheck = function(guess) {
        console.log(`\nYour Guess ====> ${guess}`);
        if (guess === this.character) {
            console.log("is CORRECT!");
            this.isGuessed = true;
        } else {
            console.log("is WRONG!");
        }
    }

}

Letter.prototype.toString = function() {
    var lete = "_"
    if (this.isGuessed) {
        return this.character;
    } else {
        return lete;
    }
}

var l = new Letter;
l.character = "e";


module.exports = Letter;