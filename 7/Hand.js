const R = require('ramda');
class Hand {
    static fiveOfAKind = 7000000000000;
    static fourOfAKind = 6000000000000;
    static fullHouse = 5000000000000;
    static threeOfAKind = 4000000000000;
    static twoPair = 3000000000000;
    static onePair = 2000000000000;
    static highCard = 1000000000000;
    static coefCardA = 14;
    static coefCardK = 13;
    static coefCardQ = 12;
    static coefCardJ = 11;
    static coefCardT = 10;
    constructor(handString, bet = 0) {
        this.handString = handString;
        this.bet = bet;
    }

    getHandValue() {
        let handByCardValue = R.countBy((x) => x)(this.getCards());

        if(Object.keys(handByCardValue).length === 5) {
            return Hand.highCard;
        }
        if(Object.keys(handByCardValue).length === 4) {
            return Hand.onePair;
        }
        if(Object.keys(handByCardValue).length === 3) {
            if(R.values(handByCardValue).includes(3)) {
                return Hand.threeOfAKind;
            }
            return Hand.twoPair
        }
        if(Object.keys(handByCardValue).length === 2) {
            if(R.values(handByCardValue).includes(3)) {
                return Hand.fullHouse;
            }
            return Hand.fourOfAKind;
        }
        return Hand.fiveOfAKind;
    }

    getCards() {
        return R.split('', this.handString)
    }

    getCardWeight(cardString) {
        switch (cardString) {
            case "A":
                return Hand.coefCardA;
            case "K":
                return Hand.coefCardK;
            case "Q":
                return Hand.coefCardQ;
            case "J":
                return Hand.coefCardJ;
            case "T":
                return Hand.coefCardT;
            default:
                return Number(cardString);
        }
    }

    getCardWeightPosition(position) {
        switch (position) {
            case 1:
                return 10000000000;
            case 2:
                return 10000000;
            case 3:
                return 100000;
            case 4:
                return 100;
            case 5:
                return 1;
        }
    }
    getHandUnitCardValue() {
        return R.sum(this.getCards().map((cardString, index) => (this.getCardWeight(cardString) * this.getCardWeightPosition(index + 1))));
    }

    getTotalWeight() {
        return this.getHandUnitCardValue() + this.getHandValue()
    }
}

module.exports = Hand
