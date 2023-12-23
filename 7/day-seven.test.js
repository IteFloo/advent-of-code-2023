const Hand = require("./Hand.js");

describe('Day seven', () => {
    describe('Valeur des mains', () => {
        test("Récupérer la valeur d'un fiveOfAKind", () => {
            let hand = new Hand("AAAAA");
            expect(hand.getHandValue()).toStrictEqual(Hand.fiveOfAKind)
        });
        test("Récupérer la valeur d'un fourOfAKind", () => {
            let hand = new Hand("AA8AA");
            expect(hand.getHandValue()).toStrictEqual(Hand.fourOfAKind)
        });
        test("Récupérer la valeur d'un fullHouse", () => {
            let hand = new Hand("23332");
            expect(hand.getHandValue()).toStrictEqual(Hand.fullHouse)
        });
        test("Récupérer la valeur d'un threeOfAKind", () => {
            let hand = new Hand("TTT98");
            expect(hand.getHandValue()).toStrictEqual(Hand.threeOfAKind)
        });
        test("Récupérer la valeur d'un twoPair", () => {
            let hand = new Hand("23432");
            expect(hand.getHandValue()).toStrictEqual(Hand.twoPair)
        });
        test("Récupérer la valeur d'un onePair", () => {
            let hand = new Hand("A23A4");
            expect(hand.getHandValue()).toStrictEqual(Hand.onePair)
        });
        test("Récupérer la valeur d'un highCard", () => {
            let hand = new Hand("23456");
            expect(hand.getHandValue()).toStrictEqual(Hand.highCard)
        });
    })
    describe('Poids des cards', () => {
        test('Récupérer le coef poids de la carte A', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("A")).toEqual(14)
        })
        test('Récupérer le coef poids de la carte K', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("K")).toEqual(13)
        })
        test('Récupérer le coef poids de la carte Q', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("Q")).toEqual(12)
        })
        test('Récupérer le coef poids de la carte J', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("J")).toEqual(11)
        })
        test('Récupérer le coef poids de la carte T', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("T")).toEqual(10)
        })
        test('Récupérer le coef poids de la carte 9', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("9")).toEqual(9)
        })
        test('Récupérer le coef poids de la carte 8', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("8")).toEqual(8)
        })
        test('Récupérer le coef poids de la carte 7', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("7")).toEqual(7)
        })
        test('Récupérer le coef poids de la carte 6', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("6")).toEqual(6)
        })
        test('Récupérer le coef poids de la carte 5', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("5")).toEqual(5)
        })
        test('Récupérer le coef poids de la carte 4', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("4")).toEqual(4)
        })
        test('Récupérer le coef poids de la carte 3', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("3")).toEqual(3)
        })
        test('Récupérer le coef poids de la carte 2', () => {
            let hand = new Hand("");
            expect(hand.getCardWeight("2")).toEqual(2)
        })
        test('Récupérer le poids total des cartes', () => {
            let hand = new Hand("23456");
            expect().toEqual(['2', '3', '4', '5', '6'])
        })
    })
    describe('Traitement de la main', () => {
        test('Récupérer la valeur de chacune des cartes de la main', () => {
            let hand = new Hand("23456");
            expect(hand.getHandUnitCardValue()).toEqual(23456)
        })
        test('Récupérer la valeur de lamain', () => {
            let hand = new Hand("AAAAA");
            expect(hand.getTotalWeight()).toEqual(23456)
        })
    })
});
