/**
 * 
 * @param {number} f0 - Сумма взоса 
 * @param {number} p - Процентная ставка
 * @param {number} c0 - Сумма, которую будут снимать каждый год
 * @param {number} n - Кол-во лет, которые хотят прожить
 * @param {number} i - Процент инфляции
 */
const fortune = (f0, p, c0, n, i) => {
    if (f0 < c0) { return false }
    let f1 = f0
    let c1 = c0
    for (let index = 1; index <= n - 1; index++) {
        f1 = f1 + f1 * p * 0.01 - c1
        c1 = c1 + c1 * i * 0.01
    }
    return f1 >= 0
}
console.log(fortune(9999, 61.8161, 10000, 3, 0));

// 100000000 1 100000 50 1
// 100000000 1.5 10000000 50 1
// 100000000 5 1000000 50 1
// 9999 61.8161 10000 3 0
module.exports = fortune;
