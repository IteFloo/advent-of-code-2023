const Hand = require("./Hand.js");
const R = require('ramda');
const fs = require("fs");
const inputFile = fs.readFileSync('./input.txt').toString();
function partOne() {
    let hands = inputFile.split('\n').filter(
        (string) => (string !== '')
    ).map((line) => {
        [hand, bet] = (line).split(' ');
        return new Hand(hand, Number(bet));
    })
    const diff = function (a,b) {
        return (a.getTotalWeight() - b.getTotalWeight());
    }
    console.log(R.sum(R.sort(diff, hands).map(
        (hand,index) => {
            return ((index + 1) * hand.bet)
        })
    )
    )
}
partOne();
