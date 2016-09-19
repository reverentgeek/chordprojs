function Chord( chordText ) {
    this.chordText = chordText;
}

Chord.prototype.getText = function () {
    return this.chordText;
};

function Chords() {
    this.chords = [];
}

Chords.prototype.createChord = function (chordText) {
    const chord = new Chord( chordText );
    this.chords.push( chord );
    return chord;
};

module.exports = Chords;
