# Morse Code Translator

This project is a web-based tool for translating between text and Morse code. It includes two main modes: Text to Morse and Morse to Text, as well as a mouse-hold interface to manually input Morse code with visual feedback.

Features

Translate plain text to Morse code.

Translate Morse code back to text.

Mouse-hold interface for generating Morse code using clicks.

Adjustable speed for automatic dot input.

Visual progress bar for timing dots and dashes.

Supports letters, numbers, and common punctuation.

File Structure
/js
 ├─ functions.js       # Encoding and decoding functions
 ├─ morseList.js       # Morse code dictionary and reverse dictionary
 ├─ translate.js       # Text ↔ Morse translation interface
 ├─ morseMain.js       # Mouse-hold Morse input functionality
/css
 ├─ style_main.css     # Styling for translation page
 ├─ styleMorse.css     # Styling for mouse-hold Morse input page
/index.html            # Translation page
/morseClick.html       # Mouse-hold Morse input page
Usage
Translation Page

Open index.html.

Select Text to Morse or Morse to Text using the radio buttons.

Enter text or Morse code in the input area.

The translated output appears in the output area automatically.

Mouse-Hold Morse Input

Open morseClick.html.

Hold down the button to input Morse code. The length of the hold determines dot or dash.

The progress bar shows timing, and the translation appears in real-time in the text area.

Adjust the input speed with the slider.

Morse Code Support

Supports letters A-Z, numbers 0-9, and common punctuation such as:

. , ? ! ' " & : ; = + - / _ @ SOS
Development Notes

functions.js exports encodeText and decodeMorse functions.

morseList.js contains dictionary (Morse → Text) and reverseDictionary (Text → Morse).

Mouse-hold input uses AudioContext for sound feedback and timing detection.

The project is modular, using ES6 modules for clean separation of functionality.
