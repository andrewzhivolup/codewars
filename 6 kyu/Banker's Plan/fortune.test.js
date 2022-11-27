const fortune = require("./fortune");

describe("Banker's plan", () => {
    test("Тест 1", () => {
        expect(fortune(100000, 1, 2000, 15, 1)).toBe(true);
    });
    test("Тест 2", () => {
        expect(fortune(100000, 1, 9185, 12, 1)).toBe(false);
    });
    test("Тест 3", () => {
        expect(fortune(100000000, 1, 100000, 50, 1)).toBe(true);
    });
    test("Тест 4", () => {
        expect(fortune(100000000, 1.5, 10000000, 50, 1)).toBe(false);
    });
    test("Тест 5", () => {
        expect(fortune(100000000, 5, 1000000, 50, 1)).toBe(true);
    });
});
