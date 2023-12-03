const Calibration = require('./calibration')

test('test get correct digit from 1 regex found', () => {
    expect(Calibration.getCorrectNumbers(['834'])).toBe(84);
});
test('test get correct digit from 2 regex found', () => {
    expect(Calibration.getCorrectNumbers(['4', '834'])).toBe(44);
});
test('test get correct digit fro 1 regex found and just one digit', () => {
    expect(Calibration.getCorrectNumbers(['4'])).toBe(44);
});

describe('Get number from line module', () => {

    test('two1nine', () => {
        expect(
            Calibration.extractedNumberFromLine('two1nine')
        ).toBe(29);
    });
    test('eightwothree', () => {
        expect(Calibration.extractedNumberFromLine('eightwothree')).toBe(83);
    });
    test('abcone2threexyz', () => {
        expect(Calibration.extractedNumberFromLine('abcone2threexyz')).toBe(13);
    });
    test('xtwone3four', () => {
        expect(Calibration.extractedNumberFromLine('xtwone3four')).toBe(24);
    });
    test('4nineeightseven2', () => {
        expect(Calibration.extractedNumberFromLine('4nineeightseven2')).toBe(42);
    });
    test('zoneight234', () => {
        expect(Calibration.extractedNumberFromLine('zoneight234')).toBe(14);
    });
    test('7pqrstsixteen', () => {
        expect(Calibration.extractedNumberFromLine('7pqrstsixteen')).toBe(76);
    });
});
