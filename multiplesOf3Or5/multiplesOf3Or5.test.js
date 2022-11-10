const multiples35 = require("./multiplesOf3Or5");

describe("Числа кратные 3 и 5", () => {
  test("Нет кратных чисел", () => {
    expect(multiples35(2)).toBe(0);
  });
  test("Есть кратные числа", () => {
    expect(multiples35(10)).toBe(23);
  });
});
