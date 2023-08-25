const rgb = require("./rgb");

describe("RGB To Hex Conversion", () => {

    const data = [
        'FFFFFF'
        , '000000'
        , '9400D3'
    ];

    test('test 1', () => {
        expect(rgb(255, 255, 255)).toBe(data[0]);
    });
    test('test 2', () => {
        expect(rgb(255, 255, 300)).toBe(data[0]);
    });
    test('test 3', () => {
        expect(rgb(0, 0, 0)).toBe(data[1]);
    });
    test('test 4', () => {
        expect(rgb(148, 0, 211)).toBe(data[2]);
    });
});