const narcissistic = require("./narcissistic");

describe("Does my number look big in this?", () => {
    test("Narcissistic", () => {
        expect(narcissistic(153)).toBe(true);
    });
    test("!Narcissistic", () => {
        expect(narcissistic(222)).toBe(false);
    });
});

