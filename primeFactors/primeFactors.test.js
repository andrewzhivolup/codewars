const primeFactors = require("./primeFactors");

describe("Разложение на простые множетили", () => {
  test("Тест 1", () => {
    expect(primeFactors(7775460)).toBe("(2**2)(3**3)(5)(7)(11**2)(17)");
  });
});
