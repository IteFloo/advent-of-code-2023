const R = require('ramda');
const fs = require('fs');
const readline = require('readline');
const Gondola = require("./Gondola");
const fileStream = fs.createReadStream('./data.txt');
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
        if(Gondola.isNumberTouching(number.touchingCoordonate,symboleCoordonate)) {
            touchingNumbers.push(Number(number.value))
        }

    })
    // console.dir(symboleCoordonate, {'maxArrayLength': null});
    console.log(R.sum(touchingNumbers));
    // console.log('Finished reading the file.');
    // Gondola.extractSymboleFromLine('563.727.....282....237..171.......892...183.......................989....*..........*................$....709...8*974.=...%.....*.....873...').forEach(function (symbole) {
    //     console.log(Gondola.getSymboleTounchingCoordonate(8,symbole));
    // })
});
