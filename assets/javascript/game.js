













































var playersGuessedLetter = ""
var wordToGuess = "madonna"
wordToGuess = wordToGuess.split("")
var answerArray = [];

var fillTheAnswerArray = () => {
    for (var i = 0; i < wordToGuess.length; i++) {
        answerArray.push("___");
    }
}

var createTheAnswerHTML = () => {
    var htmlToDisplay = "";
    for (var i = 0; i < answerArray.length; i++) {
        htmlToDisplay += `<span id=${i}> ${answerArray[i]} </span>`
    }
    $("#word").append(htmlToDisplay);
    htmlToDisplay = "";
}

var updateSpecificLetter = (number, correctLetter) => {
    var span = document.getElementById(`${number}`);
    span.innerHTML = correctLetter;
}

$(document).ready(function() {
    // console.log("Document is ready")
    fillTheAnswerArray();
    createTheAnswerHTML();
    
})

document.onkeyup = function(e) {
    // console.log(e);
    typedLetter = e.key.toLowerCase();
    console.log(typedLetter)
    for (var i = 0; i < wordToGuess.length; i++) {
        if (typedLetter === wordToGuess[i]) {
            answerArray[i] = typedLetter;
            console.log(typedLetter)
            console.log(answerArray);
            updateSpecificLetter(i, typedLetter);
        }
    
    }

    
}


