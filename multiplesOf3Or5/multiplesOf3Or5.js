const multiples35 = (number) => {
  let sum = 0;
  for (let index = 1; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) sum += index;
  }
  return sum;
};
module.exports = multiples35;
