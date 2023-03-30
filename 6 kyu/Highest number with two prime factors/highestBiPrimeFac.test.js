const highestBiPrimeFac = require("./highestBiPrimeFac");

describe("Highest number with two prime factors", () => {
    test("test 1", () => {
        expect(highestBiPrimeFac((2, 3, 50))).toEqueal([48, 4, 1]);
    });
    test("test 2", () => {
        expect(highestBiPrimeFac((5, 11, 1000))).toEqueal([605, 1, 2]);
    });
});

