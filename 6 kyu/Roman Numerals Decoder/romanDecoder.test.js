const romanDecoder = require("./romanDecoder");

describe("Roman Numerals Decoder", () => {
    test('XXI', () => {
        expect(romanDecoder('XXI')).toBe(21);
    });
    test('I', () => {
        expect(romanDecoder('I')).toBe(1);
    });
    test('IV', () => {
        expect(romanDecoder('IV')).toBe(4);
    });
    test('MMVIII', () => {
        expect(romanDecoder('MMVIII')).toBe(2008);
    });
});
