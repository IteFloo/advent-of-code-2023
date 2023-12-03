const Cubegame = require('./Cubegame')

describe('Day Two', () => {

    test('can extract game number with game id 1', () => {
        let gameNumber = Cubegame.extractGameNumber("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green");
        expect(gameNumber).toBe(1)
    });

    test('can extract game number with game id 2', () => {
        let gameNumber = Cubegame.extractGameNumber("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue");
        expect(gameNumber).toBe(2)
    });

    test('can get game tirage', () => {
        let newLine = Cubegame.getGameTirage("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green");
        expect(newLine).toEqual([
            "Game 1: 3 blue, 4 red",
            " 1 red, 2 green, 6 blue",
            " 2 green"
        ])
    });
    test('can extract color number by tirage', () => {
        let tirage = Cubegame.getColorNumerByTirage(" 3 blue, 4 red");
        expect(tirage).toEqual({
            blue:3,
            red:4,
            green: 0
        })
    });
    test('can tel if a tirage is not valid', () => {
        let tirage = Cubegame.tirageIsValidByRef(
            {
                blue:3,
                red:4,
                green: 0
            },
            {
                blue:6,
                red:4,
                green: 0
            });
        expect(tirage).toBeFalsy()
    });
    test('can tel if a tirage is valid', () => {
        let tirage = Cubegame.tirageIsValidByRef(
            {
                blue:3,
                red:4,
                green: 0
            },
            {
                blue:2,
                red:4,
                green: 0
            });
        expect(tirage).toBeTruthy()
    });
    test('can get if a game is valid', () => {
        let gameValid = Cubegame.isGameValid(
            "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
            {
                blue:14,
                red:12,
                green: 13
            });
        expect(gameValid).toBeTruthy()
    });
    test('can get if a game is not valid', () => {
        let gameNotValid = Cubegame.isGameValid(
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
            {
                blue:14,
                red:12,
                green: 13
            });
        expect(gameNotValid).toBeFalsy()
        let gameNotValid2 = Cubegame.isGameValid(
            "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
            {
                blue:14,
                red:12,
                green: 13
            });
        expect(gameNotValid2).toBeFalsy()
    });
    test('can get cube power of game', () => {
        let gamePower1 = Cubegame.getGamePower(
            "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
        );
        expect(gamePower1).toBe(48)
        let gamePower2 = Cubegame.getGamePower(
            "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"
        );
        expect(gamePower2).toBe(12)
        let gamePower3 = Cubegame.getGamePower(
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
        );
        expect(gamePower3).toBe(1560)
        let gamePower4 = Cubegame.getGamePower(
            "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"
        );
        expect(gamePower4).toBe(630)
        let gamePower5 = Cubegame.getGamePower(
            "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
        );
        expect(gamePower5).toBe(36)
    })
});
