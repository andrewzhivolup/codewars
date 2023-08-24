const highestBiPrimeFac = require("./highestBiPrimeFac");

describe("Highest number with two prime factors", () => {
    test("test 1", () => {
        const actual = highestBiPrimeFac(2, 3, 50);
        const answer = [48, 4, 1];
        expect(actual).toEqual(answer);
    });
    test("test 2", () => {
        const actual = highestBiPrimeFac(5, 11, 1000);
        const answer = [605, 1, 2];
        expect(actual).toEqual(answer);
    });
});

