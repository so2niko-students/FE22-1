const message = ".... . -.--   .--- ..- -.. .";
const SPACE_WORDS = '   ';
const SPACE_LETTERS = ' ';
const SPACE_NOTHING = '';
const MORSE_ALPHABET = {
    "|" : " ",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ","
};
const messageConverted = message.split(SPACE_WORDS).map(word => word.split(SPACE_LETTERS).map(letter => MORSE_ALPHABET[letter]).join(SPACE_NOTHING)).join(SPACE_LETTERS);

const message2 = message.replace(SPACE_WORDS, ' | ').split(SPACE_LETTERS).map(letter => MORSE_ALPHABET[letter]).join(SPACE_NOTHING);

let sentence = '';
const arrOfWords = message.split(SPACE_WORDS);//array with words in morse code
arrOfWords.forEach(word => {
    const arrayOfLetters = word.split(SPACE_LETTERS);//array with letters in morse code
    let wordText = '';
    arrayOfLetters.forEach(letter => {
        wordText += MORSE_ALPHABET[letter];
    });

    sentence = `${ sentence } ${ wordText }`;
});
sentence = sentence.trim();

console.log(messageConverted); //hey jude 
console.log(sentence); //hey jude 
console.log(message2); //hey jude 