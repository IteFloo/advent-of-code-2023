class Calibration {
    static getCorrectNumbers(numbers) {
        if (numbers.length === 1) {
            if (numbers[0].length === 1) {
                return numbers[0] * 11
            } else {
               var  numberArray = numbers[0].toString().split('');

                var first = Number(numberArray[0]);
                var last = Number(numberArray[numberArray.length - 1]);

                first = first * 10;
                return first + last;
            }
        } else {
            if (numbers[0].length === 1) {
                var first = Number(numbers[0]);
            } else {
                var first = Number(numbers[0].toString().split('')[0]);
            }

            if (numbers[numbers.length - 1].length === 1) {
                var last = Number(numbers[numbers.length - 1]);
            } else {
                let lastArray = numbers[numbers.length - 1].toString().split('')
                var last = Number(lastArray[lastArray.length - 1]);
            }

            first = first * 10;
            return first + last;
        }
    }

    static extractedNumberFromLine(line) {
        let matchingIndex = [];
        let match;
        let r = /one/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 1
                }
            ) ;
        }
        r = /two/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 2
                }
            ) ;
        }
        r = /three/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 3
                }
            ) ;
        }
        r = /four/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 4
                }
            ) ;
        }
        r = /five/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 5
                }
            ) ;
        }
        r = /six/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 6
                }
            ) ;
        }
        r = /seven/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 7
                }
            ) ;
        }
        r = /eight/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 8
                }
            ) ;
        }
        r = /nine/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: 9
                }
            ) ;
        }
        r = /\d+/g;
        while ((match = r.exec(line)) != null) {
            matchingIndex.push(
                {
                    index: match.index,
                    value: match[0]
                }
            ) ;
        }
        matchingIndex.sort((a, b) => a.index - b.index);

        let returnNumber = [];

        matchingIndex.forEach(function (matching) {
            returnNumber.push(matching.value)
        })

        return this.getCorrectNumbers(returnNumber);
    }
}

module.exports = Calibration;
