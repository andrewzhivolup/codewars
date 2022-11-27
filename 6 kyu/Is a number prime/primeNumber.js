/**
 * Проверка - простое ли число?
 * @param {number} number - Число
 * @returns
 */
const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  let index = 2;
  const limit = Math.sqrt(number);
  while (index <= limit) {
    if (number % index === 0) {
      return false;
    }
    index += 1;
  }
  return true;
};

module.exports = isPrime;

