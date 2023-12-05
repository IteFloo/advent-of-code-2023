const R = require('ramda');
const fs = require('fs');
const readline = require('readline');
const fileStream = fs.createReadStream('./data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
const Scratchcards = require('./Scratchcards');
let cardsPoints = [];
rl.on('line', (line) => {
    let card = Scratchcards.getCardInfoFromLine(line);
    cardsPoints.push(card.getPoints())
});
rl.on('close', () => {
    console.log(R.sum(cardsPoints));
});
