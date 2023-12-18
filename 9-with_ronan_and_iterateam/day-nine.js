const fs = require("fs");
const inputFile = fs.readFileSync('./input.txt').toString();

console.log(partTwo(inputFile));

function splitInputLinesAsString(dataString) {
    return dataString.split('\n');
}

function convertStringToArray(dataString) {
    return dataString.split(' ').map(Number);
}

function parseInput(inputData)
{
    // let inputData = "0 3 6 9 12 15\n" + "1 3 6 10 15 21\n" + "10 13 16 21 30 45";
    // [[0, 3, 6, 9, 12, 15], [1, 3, 6, 10, 15, 21], [10, 13, 16, 21, 30, 45]]

    return splitInputLinesAsString(inputData)
        .map(convertStringToArray);
}


function nextSequence(numberSequence) {
    return sequenceOfDifferences(pairsFromSequence(numberSequence));
}

function nextSequenceValue(sequence) {
    if (sequenceContainsOnlyZero(sequence)) {
        return 0;
    } else {
        let nextSeq = nextSequence(sequence);
        let value = nextSequenceValue(nextSeq);
        return sequence[sequence.length - 1] + value;
    }
}

function pairsFromSequence(sequence) {
    var paires = [];

    for (let i = 0; i < sequence.length - 1; i++) {
        paires.push([sequence[i], sequence[i + 1]]);
    }

    return paires;
}

function sequenceOfDifferences(arrayOfPairs) {
    return arrayOfPairs.map(([a,b]) => b - a);
}

function sequenceContainsOnlyZero(sequence) {
    for (const sequenceElement of sequence) {
        if (sequenceElement !== 0) {
            return false;
        }
    }

    return true;
}


function partOne(inputString) {
    const sequences = parseInput(inputString);

    // R.sum(sequences.map(nextSequenceValue));
    return sequences.map(nextSequenceValue).reduce((acc, val) => acc + val, 0)
}

function previousSequenceValue(sequence) {
    return nextSequenceValue(sequence.reverse());
}

function partTwo(inputString) {
    const sequences = parseInput(inputString);

    // R.sum(sequences.map(nextSequenceValue));
    return sequences.map(previousSequenceValue).reduce((acc, val) => acc + val, 0)
}

module.exports = {splitInputLinesAsString, parseInput, convertStringToArray, nextSequence, pairsFromSequence, sequenceOfDifferences, sequenceContainsOnlyZero, nextSequenceValue, partOne, previousSequenceValue}
