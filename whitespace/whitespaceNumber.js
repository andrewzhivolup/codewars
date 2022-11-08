const whitespaceNumber = (number) => {
  return getSign(number) + getBinaryRepresentation(number) + "\\n";
};

const getSign = (number) => {
  if (number === 0) return '';
  return number >= 0 ? " " : "\\t";
};

const getBinaryRepresentation = (number) => {
  number = Math.abs(number).toString(2);
  let res = "";
  for (const element of number) {
    element > 0 ? (res += "\\t") : (res += " ");
  }
  return res;
};

module.exports = whitespaceNumber;
