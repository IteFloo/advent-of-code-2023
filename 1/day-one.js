const fs = require('fs');
const readline = require('readline');
const Calibration = require('./calibration');
const fileStream = fs.createReadStream('./data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
let digitSaved = [];
rl.on('line', (line) => {
    digitSaved.push(Calibration.extractedNumberFromLine(line));

});
rl.on('close', () => {
    console.log(digitSaved);
    console.log(digitSaved.reduce((a, b) => a + b, 0));

    console.log('Finished reading the file.');
    console.log('734seven'.replace('seven', '7'));

});
