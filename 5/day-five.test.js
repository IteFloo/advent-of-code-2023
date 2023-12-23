const {recuperationDesValeursDesLignes, recuperationDestinationDeLaSource, textTocategories} = require("./day-five");
const AlmanacData = require('./AlmanacData')
describe('Day five', () => {
    test("Récupération des valeur par ligne", () => {
        let lignes = "50 98 2\n" +
            "52 50 48";
        expect(recuperationDesValeursDesLignes(lignes)).toStrictEqual(
            [
                [50, 98, 2],
                [52, 50, 48]
            ]
        )
    });
    test("Récupération des valeurs", () => {
        let alamanacSoil = new AlmanacData([
            [50, 98, 2],
            [52, 50, 48]
        ])

        expect(alamanacSoil.getDestValue(79)).toStrictEqual(81)
        expect(alamanacSoil.getDestValue(14)).toStrictEqual(14)
        expect(alamanacSoil.getDestValue(55)).toStrictEqual(57)
        expect(alamanacSoil.getDestValue(13)).toStrictEqual(13)
    });
    test("Récupération de la localisation", () => {
        let alamanacSoil = new AlmanacData([
            [50, 98, 2],
            [52, 50, 48]
        ])
        let alamanacFertilizer = new AlmanacData(
            recuperationDesValeursDesLignes("0 15 37\n" +
                "37 52 2\n" +
                "39 0 15")
        )
        let alamanacwater = new AlmanacData(
            recuperationDesValeursDesLignes("49 53 8\n" +
                "0 11 42\n" +
                "42 0 7\n" +
                "57 7 4")
        )
        let alamanacLight = new AlmanacData(
            recuperationDesValeursDesLignes("88 18 7\n" +
                "18 25 70")
        )
        let alamanacTemperature = new AlmanacData(
            recuperationDesValeursDesLignes("45 77 23\n" +
                "81 45 19\n" +
                "68 64 13")
        )
        let alamanacHumidity = new AlmanacData(
            recuperationDesValeursDesLignes("0 69 1\n" +
                "1 0 69")
        )
        let alamanacLocation = new AlmanacData(
            recuperationDesValeursDesLignes("60 56 37\n" +
                "56 93 4")
        )
        expect(
            alamanacLocation.getDestValue(
                alamanacHumidity.getDestValue(
                    alamanacTemperature.getDestValue(
                        alamanacLight.getDestValue(
                            alamanacwater.getDestValue(
                                alamanacFertilizer.getDestValue(
                                    alamanacSoil.getDestValue(55)
                                )
                            )
                        )
                    )
                )
            )
        ).toStrictEqual(86)
    });
    test("can get value string", () => {
        let text = "seeds: 79 14 55 13\n" +
            "\n" +
            "seed-to-soil map:\n" +
            "50 98 2\n" +
            "52 50 48\n" +
            "\n" +
            "soil-to-fertilizer map:\n" +
            "0 15 37\n" +
            "37 52 2\n" +
            "39 0 15\n" +
            "\n" +
            "fertilizer-to-water map:\n" +
            "49 53 8\n" +
            "0 11 42\n" +
            "42 0 7\n" +
            "57 7 4\n" +
            "\n" +
            "water-to-light map:\n" +
            "88 18 7\n" +
            "18 25 70\n" +
            "\n" +
            "light-to-temperature map:\n" +
            "45 77 23\n" +
            "81 45 19\n" +
            "68 64 13\n" +
            "\n" +
            "temperature-to-humidity map:\n" +
            "0 69 1\n" +
            "1 0 69\n" +
            "\n" +
            "humidity-to-location map:\n" +
            "60 56 37\n" +
            "56 93 4"

        let categories = textTocategories(text);
        expect(categories["temperature-to-humidity"]).toEqual(
            [ [ 0, 69, 1 ], [ 1, 0, 69 ] ]
        )
    }
    )
})
