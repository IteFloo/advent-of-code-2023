const R = require('ramda');
class Card {
    constructor(cardNumber, winningNumbers,numbers) {
        this.cardNumber = cardNumber;
        this.winningNumbers = winningNumbers;
        this.numbers = numbers;
        this.process = 0;
        this.numberOfCopy = 1;
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

    getCardIdsToCopy() {
        let cardIds = [];
        for (let c = 1; c <= this.numberOfCopy; c++) {
            for (let i = 1; i <= this.getWinningNumbers().length; i++) {
                cardIds.push(this.cardNumber + i);
            }
        }
        return R.countBy(Math.floor)(cardIds);
    }

    addCopies(number) {
        this.numberOfCopy = this.numberOfCopy + number
    }
}

module.exports = Card;
