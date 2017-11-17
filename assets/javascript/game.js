













































var playersGuessedLetter = ""
var wordToGuess = "madonna"

$(document).ready(function() {
    // console.log("Document is ready")
    
    for (var i = 0; i < wordToGuess.length; i++) {
        // $("#word").append("<span id=>_ </span>");
        $("#word").append(`<span id=${i}> _ </span>`)
    }
})

document.onkeyup = function(e) {
    // console.log(e);
    typedLetter = e.key.toLowerCase();
    playersGuessedLetter = typedLetter;
    console.log(playersGuessedLetter)
    var lettersPositionInTheArray = wordToGuess.indexOf(playersGuessedLetter)
    console.log(lettersPositionInTheArray)
}


