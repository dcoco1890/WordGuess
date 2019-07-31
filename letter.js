var Letter = function() {
    this.character = character;
    this.isGuessed = false;

    this.correctCheck = function(guess) {

        if (guess === this.character) {
            console.log("that's correct!")
            this.isGuessed = true;
        }
    }

}

Letter.prototype.toString = function() {
    if (this.isGuessed) {
        return this.character;
    } else {
        return "_";
    }
}

var l = new Letter;
l.character = "e";

Letter.correctCheck("d");
console.log("-------");
Letter.correctCheck("e");

module.exports = Letter;