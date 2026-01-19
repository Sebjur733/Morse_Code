import { mouseDown, mouseUp, decodeMorse} from './functions.js';

//variables for mousehold event
let MorsePrint = document.getElementById('input_morse');
let TextOutput = document.getElementById('textArea');
const writeMorse = document.getElementById('writeMorseButton');
  
writeMorse.addEventListener('mousedown', mouseDown);
writeMorse.addEventListener('mouseup', function () {
  let result = mouseUp();
  MorsePrint.innerHTML += result;
  TextOutput.innerHTML = decodeMorse(MorsePrint.value);
});



  
  MorsePrint.addEventListener('change', () => {
    
console.log('works');
let userInputMorse = "";

  userInputMorse = textareaInputMorse.value;
    console.log("input: " + userInputMorse + " type: " + typeof userInputMorse); // Updating each time a user change the text
    
    

  });