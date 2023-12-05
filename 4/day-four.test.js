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

    test('can get card ids to copy for a card', () => {
        let card1 = new Card(1,[41, 48, 83, 86, 17],[83, 86, 6, 31, 17, 9, 48, 53])
        let card2 = new Card(2,[13, 32, 20, 16, 61],[61, 30, 68, 82, 17, 32, 24, 19])
        let card4 = new Card(4,[41, 92, 73, 84, 69],[59, 84, 76, 51, 58, 5, 54, 83])
        let card5 = new Card(5,[87, 83, 26, 28, 32],[88, 30, 70, 12, 93, 22, 82, 36])

        expect(card1.getCardIdsToCopy()).toEqual({"2": 1, "3": 1, "4": 1, "5": 1});
        expect(card2.getCardIdsToCopy()).toEqual( {"3": 1, "4": 1});
        expect(card4.getCardIdsToCopy()).toEqual({"5": 1});
        expect(card5.getCardIdsToCopy()).toEqual({});
    });
    test('can get Card Ids to copy with a card with a higher numberOfCopy variable', () => {
        let card2 = new Card(2,[13, 32, 20, 16, 61],[61, 30, 68, 82, 17, 32, 24, 19])
        card2.numberOfCopy = 2;
        expect(card2.getCardIdsToCopy()).toEqual({"3": 2, "4": 2});
    });

    test('can group card ids with number of copy', () => {
        let card2 = new Card(2,[13, 32, 20, 16, 61],[61, 30, 68, 82, 17, 32, 24, 19])
        card2.numberOfCopy = 2;
        expect(card2.getCardIdsToCopy()).toEqual({"3": 2, "4": 2});
    });

    test('can ad copies to a card', () => {
        let card2 = new Card(2,[13, 32, 20, 16, 61],[61, 30, 68, 82, 17, 32, 24, 19])
        card2.numberOfCopy = 2;
        card2.addCopies(3);
        expect(card2.numberOfCopy).toEqual(5);
    });
})
