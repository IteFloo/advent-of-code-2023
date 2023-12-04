const R = require('ramda');
const fs = require('fs');
const readline = require('readline');
const Gondola = require("./Gondola");
const fileStream = fs.createReadStream('./test-data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
let numbersListByCoordonate = [];
let gears = [];
let lineNumber = 1;
let numberToSum = [];
rl.on('line', (line) => {
    Gondola.extractGearFromLine(line).forEach(function (symbole) {
        gears.push(Gondola.getSymboleTounchingCoordonate(lineNumber, symbole))
    })
    Gondola.extractNumberFromLine(line).forEach(function(number) {
        numbersListByCoordonate = numbersListByCoordonate.concat(Gondola.getNumberByCoordonateList(lineNumber, number))
    })
    lineNumber = lineNumber + 1;
});
rl.on('close', () => {
    gears.forEach(function (gearTouchingCoordonate){
        let gearNumbers = Gondola.getGearNumbers(
            numbersListByCoordonate,
            gearTouchingCoordonate
            )
        if(gearNumbers.length === 2) {
            numberToSum.push(gearNumbers[0].value * gearNumbers[1].value)
        }
    })
    console.log(R.sum(numberToSum));
    console.log('Finished reading the file.');

});
