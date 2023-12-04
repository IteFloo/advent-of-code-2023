const R = require('ramda');
const fs = require('fs');
const readline = require('readline');
const Gondola = require("./Gondola");
const fileStream = fs.createReadStream('./test-data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
let numbers = [];
let symboleCoordonate = [];
let lineNumber = 1;
let touchingNumbers = [];
rl.on('line', (line) => {
    Gondola.extractSymboleFromLine(line).forEach(function (symbole) {
        symboleCoordonate = Gondola.mergeCordonate(symboleCoordonate,Gondola.getSymboleTounchingCoordonate(lineNumber,symbole));
    })
    Gondola.extractNumberFromLine(line).forEach(function(number) {
        number.touchingCoordonate = Gondola.getNumberTounchingCoordonate(lineNumber, number)
        numbers.push(number)
    })
    lineNumber = lineNumber + 1;
});
rl.on('close', () => {
    numbers.forEach(function (number){
        console.log(number.value);
        console.log(number.touchingCoordonate);
        console.log(symboleCoordonate);
        if(Gondola.isNumberTouching(number.touchingCoordonate,symboleCoordonate)) {
            touchingNumbers.push(number.value)
        }

    })
    console.log(R.sum(touchingNumbers));
    console.log('Finished reading the file.');

});
