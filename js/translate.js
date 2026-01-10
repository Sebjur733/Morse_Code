import { dictionary } from './morseList.js';

let textareaInput  = document.getElementById('input_morse');
let userInput = "";

textareaInput.addEventListener('input', () => {
  userInput = textareaInput.value;
    console.log("input: " + userInput + " type: " + typeof userInput); // Oppdateres hver gang brukeren endrer tekst
});

let userOutput = document.getElementById('output_morse');

let decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  console.log(dictionary);
  //let arrayMorseWord = morseCode.split('   ');
  let wordArray = morseCode;
  let letters = "";
  let humanWord = "";
  let counter = 0;
  let finalWord;
  
  console.log("wordArray before first loop: " + wordArray + " its value: " + typeof wordArray)
  
  for (let letter = 0; letter < wordArray.length; letter ++) {
   console.log(wordArray[letter]);
      if (wordArray[letter] !== " ") {
        letters += wordArray[letter];
        console.log("letter extends: " + letters);
      } if (wordArray[letter] == " ") {
        counter ++;
        console.log("counter: " + counter);
        if(letters !== "") {
          console.log(dictionary[letters]);
        humanWord += dictionary[letters];
        console.log("human word: " + humanWord)
        letters = "";
          counter = 0;
        }
        
        }
        if (counter === 2) {
          console.log("we add a space in human word");
          humanWord += " ";
          counter = 0;
        }
        
    }
  
  if (letters !== "") {
    humanWord += dictionary[letters];
  }
  finalWord = humanWord.trim();
  
  console.log("final sentence: " + finalWord);
  
 return finalWord;
}

textareaInput.addEventListener('input', () => {
    decodeMorse(userInput);
    userOutput.innerHTML = decodeMorse(userInput);
});

