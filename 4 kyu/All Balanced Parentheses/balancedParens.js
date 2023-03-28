/**
 * Генерирует список всех возможных комбинаций сбалансированных скобок.
 * @param {number} n Количество пар скобок.
 * @return {string[]} Список всех возможных комбинаций сбалансированных скобок.
*/
function balancedParens(n) {
    if (n === 0) return [""];
    if (n === 1) return ["()"];

    let result = [];
    for (let i = 0; i < n; i++) {
        const left = balancedParens(i);
        const right = balancedParens(n - i - 1);
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                result.push(`(${left[j]})${right[k]}`);
            }
        }
    }

    return result;
}

module.exports = balancedParens;