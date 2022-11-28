const zero = (param) => {
  return expression(0, param);
};
const one = (param) => {
  return expression(1, param);
};
const two = (param) => {
  return expression(2, param);
};
const three = (param) => {
  return expression(3, param);
};
const four = (param) => {
  return expression(4, param);
};
const five = (param) => {
  return expression(5, param);
};
const six = (param) => {
  return expression(6, param);
};
const seven = (param) => {
  return expression(7, param);
};
const eight = (param) => {
  return expression(8, param);
};
const nine = (param) => {
  return expression(9, param);
};

const plus = (num) => {
  return function (y) {
    return y + num;
  };
};
const minus = (num) => {
  return function (y) {
    return y - num;
  };
};
const times = (num) => {
  return function (y) {
    return y * num;
  };
};
const dividedBy = (num) => {
  return function (y) {
    return Math.floor(y / num);
  };
};

const expression = (num, param) => {
  if (!param) return num;
  return param(num);
};

module.exports = {
  plus,
  minus,
  times,
  dividedBy,
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
};
