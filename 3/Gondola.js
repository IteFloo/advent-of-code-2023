const R = require('ramda');
class Gondola {
    static extractSymboleFromLine(line) {
        let matchingSymbole = [];
        let match;

        //let r = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,@#\/]/g;
        let r = /[^0-9.]/g;
        while ((match = r.exec(line)) != null) {
            matchingSymbole.push(
                {
                    index: match.index,
                    value: match[0]
                }
            ) ;
        }

        return matchingSymbole;
    }
    static extractGearFromLine(line){
        let matchingSymbole = [];
        let match;

        let r = /[*]/g;
        while ((match = r.exec(line)) != null) {
            matchingSymbole.push(
                {
                    index: match.index,
                    value: match[0]
                }
            ) ;
        }

        return matchingSymbole;
    }
    static getSymboleTounchingCoordonate(lineNumber, symbole) {
        let lines = [];
        if((lineNumber - 1) !== 0) {
            lines.push(lineNumber - 1);
        }
        lines.push(lineNumber);
        lines.push(lineNumber + 1);
        let tounchingCoordonate = [];
        lines.forEach(function(line) {
            tounchingCoordonate.push(line.toString() + '/' + (symbole.index - 1).toString())
            tounchingCoordonate.push(line.toString() + '/' + (symbole.index).toString())
            tounchingCoordonate.push(line.toString() + '/' + (symbole.index + 1).toString())
        })
        return tounchingCoordonate;
    }
    static extractNumberFromLine(line) {
        let matchingNumbers = [];
        let match;
        let r = /\d+/g;
        while ((match = r.exec(line)) != null) {
            matchingNumbers.push(
                {
                    index: match.index,
                    value: match[0]
                }
            ) ;
        }
        return matchingNumbers;
    }

    static getNumberTounchingCoordonate(lineNumber, number) {
        let minIndex = number.index;
        let maxIndex = number.index + (number.value.length - 1);
        let lines = [];
        let tounchingCoordonate = [];

        lines.push(lineNumber);

        lines.forEach(function(line) {
            for (let i = minIndex; i <= maxIndex; i++) {
                tounchingCoordonate.push(line.toString() + '/' + (i).toString())
            }

        })

        return tounchingCoordonate;
    }

    static mergeCordonate(coordonate1, coordonate2) {
        let mergeCoprdonate =  R.union(coordonate1, coordonate2);
        const diff = function(a, b) { return a - b; };
        return R.sort(diff, mergeCoprdonate);
    }

    static isNumberTouching(numberCoordonate, coordonate) {
        return R.intersection(numberCoordonate, coordonate).length !== 0
    }

    static getNumberByCoordonateList(lineNumber, number) {
        return Gondola.getNumberTounchingCoordonate(lineNumber, number).map(function(coordonate) {
            return {
                coordonate:coordonate,
                value:Number(number.value),
                index:number.index
            }
        })
    }

    static getGearNumbers(numbersCoordonateValueList, gearTouchingCoordonnate) {
        let match = [];
        let matchingNumber;
        gearTouchingCoordonnate.forEach(function (coordonate) {
            matchingNumber = R.find(R.propEq(coordonate,'coordonate'))(numbersCoordonateValueList);

            if(matchingNumber !== undefined){
                if(R.find(
                    R.propEq(matchingNumber.value, 'value')
                )(match) === undefined) {
                    match.push(matchingNumber);
                }
            }
        })

        return match;
    }
}
module.exports = Gondola;


