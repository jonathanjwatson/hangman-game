var wordBank = ["Apple", "Orange", "Banana", "Peach", "Apricot", "Pineapple"]
var playersGuessedLetter = ""
var wordToGuess = ""
var answerArray = [];
var wrongLetters = [];

var selectAWord = () => {
    var number = Math.floor(Math.random() * wordBank.length);
    wordToGuess = wordBank[number];
    wordToGuess = wordToGuess.toLowerCase();
    // console.log("Before Split")
    // console.log(wordToGuess)
    wordToGuess = wordToGuess.split("")
    // console.log("After Split")
    // console.log(wordToGuess);
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
    // htmlToDisplay = "";
}

var updateSpecificLetter = (number, correctLetter) => {
    var span = document.getElementById(`${number}`);
    span.innerHTML = `    ${correctLetter}    `;
}

var checkForWin = () => {
    wordToGuessJoined = wordToGuess.join("");
    answerArrayJoined = answerArray.join("");
    if (wordToGuessJoined === answerArrayJoined){
        alert(`You figured it out! The word was: ${wordToGuessJoined}`)
    }
    if (wrongLetters.length > 7) {
        alert(`You lost! The word was: ${wordToGuessJoined}`);
    }
}


$(document).onkeyup = function(e) {
    typedLetter = e.key.toLowerCase();
    var letterExists = false;
    for (var i = 0; i < wordToGuess.length; i++) {
        if (typedLetter === wordToGuess[i]) {
            answerArray[i] = typedLetter;
            letterExists = true;
            updateSpecificLetter(i, typedLetter);
        }
    }
    if (!letterExists) {
        wrongLetters.push(typedLetter);
        $("#wrong-letters").append(` ${typedLetter} `)
    }
    checkForWin();
}

$(document).ready(function() {
    // console.log("Document is ready")
    selectAWord();
    fillTheAnswerArray();
    createTheAnswerHTML();
    
})


