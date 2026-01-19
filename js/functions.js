import { dictionary } from './morseList.js';
import { reverseDictionary } from './morseList.js';


//function to translate from morse to text
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


//function for translating text to morse
let encodeText = function(text) {
  let wordArray = text;
  let letters = "";
  let morse = "";
  for (let letter = 0; letter < wordArray.length; letter ++) {
   console.log(wordArray[letter]);
      if (wordArray[letter] !== ' ' && wordArray[letter].length == 1) {
        morse += reverseDictionary[wordArray[letter]];
        morse += " ";
        console.log("word extends: " + morse);
      } if (wordArray[letter] == " ") {
        console.log("founs space");
        morse += "   ";
      }
    }
return morse;
}


let pressTimer;
  let counter = 0;
  const timeBorder = 2;
  let finalValue;
 //counting function
let count = function() {
  counter ++;
  console.log(counter);
}

//function when mouse down
let mouseDown = function() {
    finalValue = '';
pressTimer = setInterval(count, 100);
  
}

let mouseUp = function() {
    
  if (counter <= timeBorder) {
    finalValue = '.';
    console.log(finalValue);
  }
  else if (counter > timeBorder){
    finalValue = '-';
    console.log(finalValue);
  }
  counter = 0;
  clearInterval(pressTimer);
  return finalValue;
}

export { encodeText, decodeMorse, count, mouseDown, mouseUp}