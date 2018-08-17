// Create an array of words
const wordArray = [
    "Ferrari",
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

// Whatever random car is being guessed
let answer = setAnswer();

// Correctly guessed letters
let correctGuesses = [];

// Incorrect guesses
let incorrectGuesses = [];

// Remaining guesses
let remainingGuesses = 10;

let wins = 0;

let loss = 0;

/**
 * Sets the answer
 */
function setAnswer() {
    //Sets random answer
    answer = wordArray[Math.floor(Math.random() * wordArray.length)]; {
    
    };
    setAnswer();

    /**
     * Checks if a guessed letter is valid and then sets 
     * it to the correctGuesses array in the right location.
     */
    function guessLetter() {
        // Get a keyboard input from player
        // Check to see if letter exists in "let answer"
        // Check to see if a letter exists multiple times within the answer
        // If the letter exists within the answer, put letter in correctGuesses
        // Put letter in correct spot
        // If guess in incorrect, subtract 1 life and keep track of wrong guesses

    }

    // Subtracts 1 life
    function subtractLife() {
        // Subract 1 life
        // At zero stop game
    }
    // Adds Incorrect Guess
    function addIncorrectGuesses() {
        // Adds incorrect letter to incorrect guesses
    }
    /**
     * Prints the correct guess word to the screen.
     */
    function printGuessedWord() {
        // Prints guessed word
        // If letter is correct, print letter
        // If letter is nonexistent print underscore
    }

    /**
     * Starts the game and resets all the variables
     */
    function gameReset() {
        // Reset remainingGuesses
        // Reset incorrectGuesses
        // Reset correctGuesses
        // Pick new answer
        setAnswer()
    }

    /**
     * Sets the game into a victory state
     */
    function gameVictory() {
        // Print message "Does anybody know any hard games?"
    }

    /**
     * Sets the game into a lose state
     */
    function gameLose() {
        // Print message "You should read a car magazine"
    }

    /**
     * Starts the game
     */
    function startGame() {
        gameReset();
    }

    startGame()
};
