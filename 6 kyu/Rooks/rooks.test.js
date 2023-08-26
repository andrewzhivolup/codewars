const rooks = require("./rooks");

describe("All Balanced Parentheses", () => {
    test("test 1", () => {
        expect(rooks(4n, 4n)).toBe(24n);
    });
    test("test 2", () => {
        expect(rooks(4n, 5n)).toBe(0n);
    });
    test("test 3", () => {
        expect(rooks(2n, 2n)).toBe(2n);
    });
    test("test 4", () => {
        expect(rooks(12n, 9n)).toBe(17563392000n);
    });
});