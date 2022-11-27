const meanSquareError = require("./meanSquareError");

describe("Mean Square Error", () => {
    test("Teст 1", () => {
        expect(meanSquareError([1, 2, 3], [4, 5, 6])).toBe(9);
    });
    test("Teст 2", () => {
        expect(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2])).toBe(16.5);
    });
    test("Teст 3", () => {
        expect(meanSquareError([-1, 0], [0, -1])).toBe(1);
    });
});
