const stringExpansion = require("./simpleStringExpansion");

describe("", () => {
  test("Базовый пример: 3 * \"D\" + 2 * \"a\" + 5 * \"d\" + 2 * \"f\"", () => {
    expect(stringExpansion("3D2a5d2f")).toBe("DDDaadddddff");
  });
  test("Не \"aaabc\" и не \"abcabcabc\": 3 * \"a\" + 3 * \"b\" + 3 * \"c\"", () => {
    expect(stringExpansion("3abc")).toBe("aaabbbccc");
  });
  test("Несколько последовательных цифр", () => {
    expect(stringExpansion("3d332f2a")).toBe("dddffaa");
  });
  test("Без цифр", () => {
    expect(stringExpansion("abcde")).toBe("abcde");
  });
  test("Без букв для повторения", () => {
    expect(stringExpansion("1111")).toBe("");
  });
  test("Пустая строка", () => {
    expect(stringExpansion("")).toBe("");
  });
  test("Рандомный тест", () => {
    expect(stringExpansion("YIF7tIg6U5473VsV0s")).toBe("YIFtttttttIIIIIIIgggggggUUUUUUVVVsssVVV");
  });
});
