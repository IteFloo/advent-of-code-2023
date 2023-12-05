const R = require('ramda');
const fs = require('fs');
const readline = require('readline');
const fileStream = fs.createReadStream('./data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
const Scratchcards = require('./Scratchcards');
let cards = [];
rl.on('line', (line) => {
    let card = Scratchcards.getCardInfoFromLine(line);
    cards.push(card)
});
rl.on('close', () => {
    let test = {};
    let numberOfCards = 0;
    cards.forEach(function (card){
        if(R.has(card.cardNumber)(test)) {
            card.addCopies(R.prop(card.cardNumber, test))
        }

        let cardIdsToCopy = card.getCardIdsToCopy()

        for (let [key, value] of Object.entries(cardIdsToCopy)) {
            if(R.has(key)(test)) {
                test = R.modify(key, R.add(value), test)
            }
            else {
                test = R.assoc(key, value, test);
            }

        }
        numberOfCards = numberOfCards + card.numberOfCopy;
    })
    console.log(numberOfCards);
});
