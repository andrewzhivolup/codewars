const primeFactors = (number) => {
  if (number < 3) return number;
  const res = {};
  for (let index = 2; index <= number; index++) {
    let flag = true;
    while (flag) {
      if (number % index == 0) {
        !res[index] ? (res[index] = 1) : (res[index] += 1);
        number = number / index;
      } else {
        flag = false;
      }
    }
  }
  return getRequiredMapping(res);
};

const getRequiredMapping = (object) => {
  let string = "";
  for (const key in object) {
    if (object[key] === 1) {
      string += `(${key})`;
    } else {
      string += `(${key}**${object[key]})`;
    }
  }
  return string;
};

module.exports = primeFactors;
