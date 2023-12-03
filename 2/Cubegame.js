class Cubegame {
    static extractGameNumber(gameLine) {
        return Number(gameLine.match(/\d+/)[0]);
    }
    static getGameTirage(gameLine) {
        return gameLine.split(';');
    }

    static getColorNumerByTirage(gameTirage) {
        let blueRegex = /\d+(?=\b blue\b)/
        let redRegex = /\d+(?=\b red\b)/
        let greenRegex = /\d+(?=\b green\b)/
        return {
            blue: gameTirage.match(blueRegex) ? Number(gameTirage.match(blueRegex)[0]) : 0,
            red: gameTirage.match(redRegex) ? Number(gameTirage.match(redRegex)[0]) : 0,
            green: gameTirage.match(greenRegex) ? Number(gameTirage.match(greenRegex)[0]) : 0
        }
    }

    static tirageIsValidByRef(expected, tirage) {
        return expected.blue >= tirage.blue && expected.red >= tirage.red && expected.green >= tirage.green;

    }

    static isGameValid(gameline, expected) {
        let tirages = this.getGameTirage(gameline);

        return tirages.every((tirageLine) => this.tirageIsValidByRef(
            expected,
            this.getColorNumerByTirage(tirageLine)
        ) === true)

    }

    static getGamePower(gameline) {
        console.log(this.extractGameNumber(gameline))
        let tirages = this.getGameTirage(gameline);
        let minimunSetPower = {
            blue:0,
            red:0,
            green:0
        }
        tirages.forEach(function (tirageLine)
        {
            let colorNumber = Cubegame.getColorNumerByTirage(tirageLine);

            if(colorNumber.red > minimunSetPower.red) {
                minimunSetPower.red = colorNumber.red;
            }
            if(colorNumber.blue > minimunSetPower.blue) {
                minimunSetPower.blue = colorNumber.blue;
            }
            if(colorNumber.green > minimunSetPower.green) {
                minimunSetPower.green = colorNumber.green;
            }
        })
        console.log(minimunSetPower)
        return minimunSetPower.red * minimunSetPower.green * minimunSetPower.blue;

    }
}
//\d+(?=\b blue\b)
module.exports = Cubegame;
