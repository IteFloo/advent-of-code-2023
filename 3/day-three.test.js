const Gondola = require('./Gondola');
const fs = require("fs");
const readline = require("readline");
const Cubegame = require("../2/Cubegame");
describe('Day three', () => {
    test('can extract all symbole from line', () => {
        let symboles = Gondola.extractSymboleFromLine('...$.*....');
        expect(symboles.length).toBe(2)
    });
    test('can extract symbole index from line', () => {
        let symboles = Gondola.extractSymboleFromLine('...$.*....');
        expect(symboles[0]).toEqual({
            index:3,
            value:'$'
        })
        expect(symboles[1]).toEqual({
            index:5,
            value:'*'
        })
    });
    test('can get symbole touching coordonate', () => {
        let symbole = {
            index:3,
            value:'$',
        }
        let lineNumber = 2;
        let symboleTouchingCoordonate = Gondola.getSymboleTounchingCoordonate(lineNumber, symbole);
        expect(symboleTouchingCoordonate).toEqual(
            ["1/2","1/3","1/4","2/2","2/3","2/4","3/2","3/3","3/4"]
        )
    });
    test('can extract number from line', () => {
        let numberFromLine = Gondola.extractNumberFromLine('..35..633.');
        expect(numberFromLine.length).toBe(2);
    });
    test('can get number tounchingCoordonate', () => {
        let number = {
            index:2,
            value:'35',
        }
        let lineNumber = 2;
        let numberTouchingCoordonate = Gondola.getNumberTounchingCoordonate(lineNumber, number);
        expect(numberTouchingCoordonate).toEqual(
            ["2/2","2/3"]
        )
        let number2 = {
            index:2,
            value:'352',
        }
        let numberTouchingCoordonate2 = Gondola.getNumberTounchingCoordonate(lineNumber, number2);
        expect(numberTouchingCoordonate2).toEqual(
            ["2/2","2/3","2/4"]
        )
        let number3 = {
            index:2,
            value:'3',
        }
        let numberTouchingCoordonate3 = Gondola.getNumberTounchingCoordonate(lineNumber, number3);
        expect(numberTouchingCoordonate3).toEqual(
            ["2/2"]
        )
    });
    test('can merge coordonate', () => {
        let mergeCoordonate = Gondola.mergeCordonate(['11', '12', '13', '22', '23'], ["11", "16", "17", "22"]);
        expect(mergeCoordonate).toEqual(['11', '12', '13', '16', '17', '22', '23']);
    });
    test('can valid number if touching a symbole', () => {
        let numberCoordonate = ['11', '13', '24'];
        let coordonate = ['23', '12', '17', '24'];
        let touching = Gondola.isNumberTouching(numberCoordonate, coordonate);
        expect(touching).toBeTruthy();
    });
    test('can not valid number if touching a symbole', () => {
        let numberCoordonate = ['11', '13', '24'];
        let coordonate = ['23', '12', '17'];
        let touching = Gondola.isNumberTouching(numberCoordonate, coordonate);
        expect(touching).toBeFalsy();
    });
    test('can list number by tounchingCoordonate', () => {
        let number = {
            index:2,
            value:'35',
        }
        let lineNumber = 2;
        let coordonateListNumber = Gondola.getNumberByCoordonateList(lineNumber, number);

        expect(coordonateListNumber).toEqual(
            [{
                coordonate:'2/2',
                value:35,
                index:2
            },
            {
                coordonate:'2/3',
                value:35,
                index: 2
            }]
        )
    });
    test('can get gear touching unique number', () => {
        let numbersCoordonateValueList = [
                {
                    coordonate:'2/2',
                    value:35,
                    index:2
                },
                {
                    coordonate:'2/3',
                    value:35,
                    index:2
                },
                {
                    coordonate:'2/5',
                    value:234,
                    index:5,
                },
                {
                    coordonate:'2/6',
                    value:234,
                    index:5,
                },
                {
                    coordonate:'2/7',
                    value:234,
                    index:5,
                },
            ]
        let gearTouchingCoordonnate = [
            '2/3','2/4','2/5',
            '3/3','3/4','3/5',
            '4/3','4/4','4/5',
        ]

        let matchingNumbers = Gondola.getGearNumbers(numbersCoordonateValueList, gearTouchingCoordonnate)
        expect(matchingNumbers.length).toBe(2);
    })
});
