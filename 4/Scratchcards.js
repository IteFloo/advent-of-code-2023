const Card = require('./Card');
class Scratchcards {
    static getCardInfoFromLine(line) {
        let spiltCardInfoAndNumbers = line.split(':');
        let cardNumber = Number(spiltCardInfoAndNumbers[0].match(/\d+/));

        let seprateWinningNumbersAndCardNumbers = spiltCardInfoAndNumbers[1].split('|');

        let winingNumbers = seprateWinningNumbersAndCardNumbers[0].match(/\d+/g).map(Number);
        let cardNumbers = seprateWinningNumbersAndCardNumbers[1].match(/\d+/g).map(Number);

        return new Card(cardNumber, winingNumbers, cardNumbers);
    }
}

module.exports = Scratchcards;
