const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require("./func");

describe("Calculating with Functions", () => {
  test("1+2+9=12", () => {
    expect(one(plus(two(plus(nine()))))).toBe(12);
  });
  test("4-3-0=1", () => {
    expect(four(minus(three(minus(zero()))))).toBe(1);
  });
  test("5*6=30", () => {
    expect(five(times(six()))).toBe(30);
  });
  test("8/7=1", () => {
    expect(eight(dividedBy(seven()))).toBe(1);
  });
});
