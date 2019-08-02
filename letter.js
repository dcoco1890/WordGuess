var Letter = function(character) {
    this.character = character;
    this.isGuessed = false;

    this.correctCheck = function(guess) {
        if (guess === this.character) this.isGuessed = true;

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