const fs = require('fs');
const readline = require('readline');
const Cubegame = require('./Cubegame')
const fileStream = fs.createReadStream('./data.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
let valideGameIds = [];
let gamePower = []
rl.on('line', (line) => {
    if(Cubegame.isGameValid(line, {
        blue:14,
        red:12,
        green:13
    })) {
        valideGameIds.push(Cubegame.extractGameNumber(line));

    }

    gamePower.push(Cubegame.getGamePower(line));

});
rl.on('close', () => {
    console.log(valideGameIds);
    console.log(valideGameIds.reduce((a, b) => a + b, 0));
    console.log(gamePower)
    console.log(gamePower.reduce((a, b) => a + b, 0));
    console.log('Finished reading the file.');

});
