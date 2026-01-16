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

//test run
let testRun = encodeText('SOS SOS SOS');
console.log("test run with !: " + testRun);


/* 

navigating between text and morse

*/


//variable saving html structures
let textMorseHtml = '<textarea id="input_text" placeholder="write text here" rows="10" cols="50"></textarea>'
let morseTextHtml = '<textarea id="input_morse" placeholder="write morse here" rows="10" cols="50"></textarea>'

//variables saving radio for language changing
const radioText = document.getElementById('text');
const radioMorse = document.getElementById('morse');

//event listeners to change between languages, based on radio change

//text to morse
radioText.addEventListener('change', () => {
  document.getElementById("input_div").innerHTML = textMorseHtml;
  let userOutput = document.getElementById('output_morse');
  userOutput.innerHTML = '';
  let textareaInputText  = document.getElementById('input_text');
let userInputText = "";

textareaInputText.addEventListener('input', () => {
  userInputText = textareaInputText.value.toUpperCase();
    console.log("input: " + userInputText + " type: " + typeof userInputText); // Updating each time a user change the text
    userOutput.innerHTML = encodeText(userInputText);
});
});


//morse to text
radioMorse.addEventListener('change', () => {
  document.getElementById("input_div").innerHTML = morseTextHtml;
  let userOutput = document.getElementById('output_morse');
  userOutput.innerHTML = '';

  let textareaInputMorse  = document.getElementById('input_morse');
  textareaInputMorse.addEventListener('input', () => {

let userInputMorse = "";


  userInputMorse = textareaInputMorse.value;
    console.log("input: " + userInputMorse + " type: " + typeof userInputMorse); // Updating each time a user change the text
    
  decodeMorse(userInputMorse);
    userOutput.innerHTML = decodeMorse(userInputMorse);

  });

});




/*  

Text to morse functionality

*/



