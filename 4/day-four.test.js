const Scratchcards = require('./Scratchcards');
const Card = require('./Card');
describe('Day four', () => {
    test('can extract card info and generate a Card class', () => {

        let cardInfo = Scratchcards.getCardInfoFromLine('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

        expect(cardInfo).toEqual(
            new Card(1,[41, 48, 83, 86, 17],[83, 86, 6, 31, 17, 9, 48, 53])
        )
    });

    test('can get winning numbers', () => {

        let card1 = new Card(1,[41, 48, 83, 86, 17],[83, 86, 6, 31, 17, 9, 48, 53])

        expect(card1.getWinningNumbers()).toEqual([17, 48, 83, 86]);
    });
    test('can get points for winning card', () => {

        let card1 = new Card(1,[41, 48, 83, 86, 17],[83, 86, 6, 31, 17, 9, 48, 53])

        expect(card1.getPoints()).toEqual(8);
    });
    test('can get points for losing card', () => {

        let card1 = new Card(5,[87, 83, 26, 28, 32],[88, 30, 70, 12, 93, 22, 82, 36])

        expect(card1.getPoints()).toEqual(0);
    });
    test('can get points for winning card with one winning number', () => {

        let card1 = new Card(4,[41, 92, 73, 84, 69],[59, 84, 76, 51, 58, 5, 54, 83])

        expect(card1.getPoints()).toEqual(1);
    });
})
