const findSequences = require("./findSequences");

describe("Find the integer sequences", () => {

    const data = {
        '1':[]
        , '3': [[1,2]]
        , '15': [[7,8],[4,5,6],[1,2,3,4,5]]
        , '20': [[2, 3, 4, 5, 6]]
        , '100': [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]]
    };

    test('test 1', () => {
        const n = 1
        expect(findSequences(n)).toEqual(data[`${n}`]);
    });
    test('test 3', () => {
        const n = 3
        expect(findSequences(n)).toEqual(data[`${n}`]);
    });
    test('test 15', () => {
        const n = 15
        expect(findSequences(n)).toEqual(data[`${n}`]);
    });
    test('test 20', () => {
        const n = 20
        expect(findSequences(n)).toEqual(data[`${n}`]);
    });
    test('test 100', () => {
        const n = 100
        expect(findSequences(n)).toEqual(data[`${n}`]);
    });
});


