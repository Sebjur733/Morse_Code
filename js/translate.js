
import { encodeText, decodeMorse} from './functions.js';




//variables for mousehold event
let userOutput = document.getElementById('output_morse');


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

////// ended here....
radioMorse.addEventListener('change', () => {
  document.getElementById("input_div").innerHTML = morseTextHtml;
  userOutput.innerHTML = '';

  let textareaInputMorse  = document.getElementById('input_morse');
  textareaInputMorse.addEventListener('input', () => {

let userInputMorse = "";

  userInputMorse = textareaInputMorse.value;
    console.log("input: " + userInputMorse + " type: " + typeof userInputMorse); // Updating each time a user change the text
    
    userOutput.innerHTML = decodeMorse(userInputMorse);

  });

});





/*  

Text to morse functionality

*/



