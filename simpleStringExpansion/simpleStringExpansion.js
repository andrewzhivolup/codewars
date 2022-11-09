const stringExpansion = (string) => {
  if (!string) return "";
  const simbolArray = string.split("");
  let multiplier = 1;
  let result = "";
  simbolArray.forEach(element => {
    if (element === '0' || Number(element)) {
      multiplier = element
    } else {
      result += element.repeat(multiplier)
    }
  });
  return result;
};

module.exports = stringExpansion;