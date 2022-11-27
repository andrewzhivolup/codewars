const yesNo = require("./yesNo");

describe("Yes No Yes No", () => {
  test("Teст 1", () => {
    expect(yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 3, 5, 7, 9, 2, 6, 10, 8, 4]);
  });
  test("Тест 2", () => {
    expect(yesNo(['this', 'code', 'is', 'right', 'the'])).toEqual(['this', 'is', 'the', 'right', 'code']);
  });
});
