//Car Hangman
var array = ["Ferrari",
    "Porsche",
    "Lamborghini",
    "Pagani",
    "Bugatti",
    "Koenigsegg",
    "BMW",
    "Audi",
    "Mercedes",
    "Fiat",
    "Maserati",
    "VW",
    "Jaguar",
    "Aston Martin",
    "Land Rover",
    "Acura",
    "Infiniti",
    "Honda",
    "Lexus",
    "Mazda",
    "Mitsubishi",
    "Nissan",
    "Subaru",
    "Kia",
    "Hyundai",
    "Volvo",
    "Bentley",
    "Rolls Royce",
    "McLaren",
    "Mini",
    "Cadillac",
    "Ford",
    "Chevrolet",
    "Dodge",
    "Jeep",
    "Lincoln",
    "Tesla"
];
var answer;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
//Initialize game 
function initializeGame() {
    answer = array[Math.floor(Math.random() * array.length)];
    allowedGuesses = 10;
    wrongGuesses = [];
    correctGuesses = [];
    // initialize correctGuesses array with underscores
    for (var i = 0; i < array.length; i++) {
        correctGuesses.push('_');
    }
    wordElement.innerHTML = correctGuesses.join(' ');
    letterCountElement.innerHTML = allowedGuesses;
}
function updateGuesses(letter) {
    allowedGuesses--; // decrement guesses left
    letterCountElement.innerHTML = allowedGuesses;
    if (array.indexOf(letter) === -1) { // letter is NOT in the word
        wrongGuesses.push(letter); // update letters guessed
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    } else { // letter IS in the word
        // replace underscore with the letter
        for (var i = 0; i < array.length; i++) {
            if (word[i] === letter) {
                correctGuesses[i] = letter;
            }
        }
        wordElement.innerHTML = correctGuesses.join(' ');
    }
}
function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
        alert('You Won!');
    } else if (allowedGuesses === 0) {
        alert('You Lost!');
    }
}
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};
initializeGame(); F