const isPrime = require("./primeNumber");

describe("Простое ли число?", () => {
  test("Положительное число (не простое)", () => {
    expect(isPrime(75)).toBe(false);
  });
  test("Положительное число (простое)", () => {
    expect(isPrime(2)).toBe(true);
  });
  test("Единица", () => {
    expect(isPrime(1)).toBe(false);
  });
  test("Нуль", () => {
    expect(isPrime(0)).toBe(false);
  });
  test("Отрицательное число", () => {
    expect(isPrime(-1)).toBe(false);
  });
});

