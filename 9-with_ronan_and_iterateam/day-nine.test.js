const {splitInputLinesAsString, parseInput, convertStringToArray, nextSequence, pairsFromSequence, sequenceOfDifferences, sequenceContainsOnlyZero, nextSequenceValue, partOne, previousSequenceValue} = require("./day-nine");

describe('Day nine', () => {
    test("le jeu de donnés d'exemple renvoi 114", () => {
        let exempleData = "0 3 6 9 12 15\n" + "1 3 6 10 15 21\n" + "10 13 16 21 30 45";
        expect(partOne(exempleData)).toBe(114);
    });

    test("Mon input est transformé en tableau", () => {
        let inputData = "0 3 6 9 12 15\n" + "1 3 6 10 15 21\n" + "10 13 16 21 30 45";
        expect(parseInput(inputData)).toStrictEqual([
            [0, 3, 6, 9, 12, 15],
            [1, 3, 6, 10, 15, 21],
            [10, 13, 16, 21, 30, 45],
        ]);
    });

    test("On récupère un tableau de chaines", () => {
        let inputData = "0 3 6 9 12 15\n" + "1 3 6 10 15 21\n" + "10 13 16 21 30 45";
        expect(splitInputLinesAsString(inputData)).toEqual([
            "0 3 6 9 12 15", "1 3 6 10 15 21", "10 13 16 21 30 45"
        ]);
    })

    test("On peut convertir une chaine en tableau de nombre", () => {
        expect(convertStringToArray("0 3 6 9 12 15")).toStrictEqual([0, 3, 6, 9, 12, 15])
    })
    test("On peut convertir une chaine en tableau de nombre avec des nombres négatifs", () => {
        expect(convertStringToArray("0 3 -6 9 -12 15")).toStrictEqual([0, 3, -6, 9, -12, 15])
    })

    test("Je veux la sequence suivante", () => {
        expect(nextSequence([0, 3, 6, 9, 12, 15])).toStrictEqual([3, 3, 3, 3, 3]);
    });

    describe("Est ce que ma sequence me retourne le bon nombre", () => {
        test("Cas général [0, 3, 6, 9, 12, 15]", () => {
            expect(nextSequenceValue([0, 3, 6, 9, 12, 15])).toBe(18);
        });
        test("Cas général [1 3 6 10 15 21]", () => {
            expect(nextSequenceValue([1, 3, 6, 10, 15, 21])).toBe(28);
        });
        test("Cas particulier avec seulement des zeros ", () => {
            expect(nextSequenceValue([0,0,0,0])).toBe(0);
        });
    });

    test("Je veux récupérer les paires de la séquence",() => {
        expect(pairsFromSequence([0, 3, 6, 9, 12, 15])).toStrictEqual([
            [0,3],
            [3,6],
            [6,9],
            [9,12],
            [12,15]
        ])
    })

    test("Je veux récupérer un tableau des différences entre les paires", () => {
        expect(sequenceOfDifferences([
            [0,3],
            [3,6],
            [6,9],
            [9,12],
            [12,15]
        ])).toStrictEqual([3,3,3,3,3])
    });

    describe("Est-ce que ma séquence est composée uniquement de zéro", () => {
        test("Cas positif", () => {
            expect(sequenceContainsOnlyZero([0,0])).toBeTruthy();
        });

        test("Cas négatif", () => {
            expect(sequenceContainsOnlyZero([0,1])).toBeFalsy();
        });
    });


    test("Je peux calculer la valeur précédente d'une séquence", () => {
       expect(previousSequenceValue([10,  13,  16,  21,  30,  45])).toBe(5);
    });

});



