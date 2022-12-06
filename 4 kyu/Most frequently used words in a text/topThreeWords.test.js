const topThreeWords = require("./topThreeWords");

describe("Most frequently used words in a text", () => {
    test("test 1", () => {
        expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).toEqual(['e', 'd', 'a']);
    });
    test("test 2", () => {
        expect(topThreeWords("a a c b b")).toEqual(['a', 'b', 'c']);
    });
    test("test 3", () => {
        expect(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).toEqual(['e', 'ddd', 'aa']);
    });
    test("test 4", () => {
        expect(topThreeWords("  //wont won't won't ")).toEqual(["won't", "wont"]);
    });
    test("test 5", () => {
        expect(topThreeWords("  , e   .. ")).toEqual(["e"]);
    });
    test("test 6", () => {
        expect(topThreeWords("  ...  ")).toEqual([]);
    });
    test("test 7", () => {
        expect(topThreeWords("  '  ")).toEqual([]);
    });
    test("test 8", () => {
        expect(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
        mind, there lived not long since one of those gentlemen that keep a lance
        in the lance-rack, an old buckler, a lean hack, and a greyhound for
        coursing. An olla of rather more beef than mutton, a salad on most
        nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
        on Sundays, made away with three-quarters of his income.`)).toEqual(['a', 'of', 'on']);
    });
});
