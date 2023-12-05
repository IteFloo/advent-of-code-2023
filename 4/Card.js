const R = require('ramda');
class Card {
    constructor(cardNumber, winningNumbers,numbers) {
        this.cardNumber = cardNumber;
        this.winningNumbers = winningNumbers;
        this.numbers = numbers;
    }

    getWinningNumbers() {
        const diff = function(a, b) { return a - b; };
        return R.sort(diff, R.intersection(this.winningNumbers, this.numbers));
    }

    getPoints() {
        let winningNumbers = this.getWinningNumbers();
        if(winningNumbers.length === 0) {
            return 0
        }
        if(winningNumbers.length === 1) {
            return 1
        }

        return Math.pow(2, winningNumbers.length - 1);
    }
}

module.exports = Card;
