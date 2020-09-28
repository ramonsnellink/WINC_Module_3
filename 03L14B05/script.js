// Negatief bericht als input niet gelijk is aan willekeurig getal
// Positief bericht als je het goed hebt (alert())
// Bericht tonen als spel af is "Dag x, etc"

// BONUS:
// Max 5 keer om te raden
// Na elke poging een bericht hoeveel pogingen je nog hebt
// Bericht als je geen pogingen meer hebt

// Zelf de range bepalen waaruit de gebruiker gaat raden
// Vraag naar het kleinste en grootste getal
//

// alert("Hallo");

// Random number from 0 to 25
let guessesRemaining = 5;

const randomNumber = Math.round(Math.random() * 25);
console.log(randomNumber);

// Ask for name, greet them.
const userName = prompt("Welkom, wat is je naam?");
alert(`Hey ${userName}`);

const compareNumbers = (randomNumber) => {
  const guessedNumber = parseInt(
    prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden")
  );

  if (randomNumber === guessedNumber) {
    alert("Je hebt gewonnen!");
    return true;
  } else {
    guessesRemaining--;
    alert(`Dat is niet correct, je hebt ${guessesRemaining} pogingen over`);
  }
};

// check if the user has guesses remaining

const checkRemainingGuesses = () => {
  if (compareNumbers() === true) {
    return;
  }

  for (i = 0; i <= guessesRemaining; i++) {
    if (guessesRemaining >= 0) {
      compareNumbers(randomNumber);
    } else {
      alert("Het spel is over, je hebt verloren");
    }
  }
};

checkRemainingGuesses();
