const solution = (firstArray, secondArray) => {
  let result = 0;
  for (let index = 0; index < firstArray.length; index++) {
    result += (firstArray[index] - secondArray[index]) ** 2;
  }
  return result / firstArray.length;
};

module.exports = solution;
//   a.reduce((sum, n, i) => sum + (n - b[i]) ** 2, 0) / a.length;
