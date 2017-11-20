var wordBank = ["Apple", "Orange", "Banana", "Peach", "Apricot", "Pineapple"]
var playersGuessedLetter = ""
var wordToGuess = "madonna"
wordToGuess = wordToGuess.split("")
var answerArray = [];

var selectAWord = () => {
    var number = Math.floor(Math.random() * wordBank.length);
    console.log(number);
    wordToGuess = wordBank[number];
    console.log(wordToGuess)
    wordToGuess = wordToGuess.toLowerCase();
    console.log(wordToGuess)
}

var fillTheAnswerArray = () => {
    for (var i = 0; i < wordToGuess.length; i++) {
        answerArray.push("__");
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
    span.innerHTML = `    ${correctLetter}    `;
}

var checkForWin = () => {
    wordToGuessJoined = wordToGuess.join("");
    answerArrayJoined = answerArray.join("");
    if (wordToGuessJoined === answerArrayJoined){
        alert("You figured it out!")
    }
}

$(document).ready(function() {
    // console.log("Document is ready")
    // selectAWord();
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
    checkForWin();

    
}


