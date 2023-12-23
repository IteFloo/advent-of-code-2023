const R = require('ramda');
const fs = require("fs");
const inputFile = fs.readFileSync('./input.txt').toString();
const AlmanacData = require("./AlmanacData");
function recuperationDesValeursDesLignes(lignes) {
    return lignes.split('\n').map(line => line.split(' ').map(Number));
}

function recuperationDestinationDeLaSource(valeurs, source) {
    let range = valeurs[2];
    let startSource = valeurs[1];
    let startDest = valeurs[0];

    if(startSource < source && source < (startSource + range)) {
        return startDest + ((startSource + range) - source)
    }
    else {
        return source;
    }
}

function textTocategories(text) {
   return text.split('\n').reduce(
        function (accumulator, currentValue) {
            if(R.test(/seeds/g,currentValue)) {
               return R.assoc('seeds',currentValue.split(': ')[1].split(' ').map(Number), accumulator);
            }
            if(R.test(/seed-to-soil map:/, currentValue)) {
                return R.assoc('actualAdding', 'seed-to-soil', accumulator);
            }
            if(R.test(/soil-to-fertilizer map:/, currentValue)) {
                return R.assoc('actualAdding','soil-to-fertilizer', accumulator);
            }
            if(R.test(/fertilizer-to-water map:/, currentValue)) {
                return R.assoc('actualAdding','fertilizer-to-water', accumulator);
            }
            if(R.test(/water-to-light map:/, currentValue)) {
                return R.assoc('actualAdding', 'water-to-light', accumulator);
            }
            if(R.test(/light-to-temperature map:/, currentValue)) {
                return R.assoc('actualAdding', 'light-to-temperature', accumulator);
            }
            if(R.test(/temperature-to-humidity map:/, currentValue)) {
                return R.assoc('actualAdding', 'temperature-to-humidity', accumulator);
            }
            if(R.test(/humidity-to-location map:/, currentValue)) {
                return R.assoc('actualAdding', 'humidity-to-location', accumulator);
            }
            if(currentValue === '') {
                return accumulator;
            }
            return R.assoc(accumulator.actualAdding, R.append(currentValue.split(' ').map(Number), accumulator[accumulator.actualAdding]), accumulator);
        },
        {'actualAdding':'none'},
    );
}

function partOne(text) {
    let categories = textTocategories(text);
    let seeds = categories['seeds'];
    let alamanacSoil = new AlmanacData(categories['seed-to-soil'])
    let alamanacFertilizer = new AlmanacData(categories['soil-to-fertilizer'])
    let alamanacwater = new AlmanacData(categories['fertilizer-to-water'])
    let alamanacLight = new AlmanacData(categories['water-to-light'])
    let alamanacTemperature = new AlmanacData(categories['light-to-temperature'])
    let alamanacHumidity = new AlmanacData(categories['temperature-to-humidity'])
    let alamanacLocation = new AlmanacData(categories['humidity-to-location'])

    let locationList = seeds.map(function (seed) {
        return alamanacLocation.getDestValue(
            alamanacHumidity.getDestValue(
                alamanacTemperature.getDestValue(
                    alamanacLight.getDestValue(
                        alamanacwater.getDestValue(
                            alamanacFertilizer.getDestValue(
                                alamanacSoil.getDestValue(seed)
                            )
                        )
                    )
                )
            )
        )
    })

    const diff = function(a, b) { return a - b; };
    return R.sort(diff, locationList)[0];
}
function partTwo(text) {
    let categories = textTocategories(text);
    let seeds = R.splitEvery(2,categories['seeds']);
    let alamanacSoil = new AlmanacData(categories['seed-to-soil'])
    let alamanacFertilizer = new AlmanacData(categories['soil-to-fertilizer'])
    let alamanacwater = new AlmanacData(categories['fertilizer-to-water'])
    let alamanacLight = new AlmanacData(categories['water-to-light'])
    let alamanacTemperature = new AlmanacData(categories['light-to-temperature'])
    let alamanacHumidity = new AlmanacData(categories['temperature-to-humidity'])
    let alamanacLocation = new AlmanacData(categories['humidity-to-location'])
    console.log(seeds);
    let locationList = seeds.map(function (seed) {

        let min ;
        for (let i = seed[0]; i < seed[0] + seed[1]; i++) {
            let location = alamanacLocation.getDestValue(
                alamanacHumidity.getDestValue(
                    alamanacTemperature.getDestValue(
                        alamanacLight.getDestValue(
                            alamanacwater.getDestValue(
                                alamanacFertilizer.getDestValue(
                                    alamanacSoil.getDestValue(i)
                                )
                            )
                        )
                    )
                )
            )
            if(i === seed[0]) {
                min = location
            } else {
                min = (min < location) ? min : location;
            }
        }
        return min;
    })

    const diff = function(a, b) { return a - b; };
    return R.sort(diff, locationList)[0];
}
console.log(partTwo(inputFile));
module.exports = {recuperationDesValeursDesLignes, recuperationDestinationDeLaSource, textTocategories}
