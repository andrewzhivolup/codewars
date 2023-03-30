const highestBiPrimeFac = (p1, p2, nMax) => {
    let maxNumber = 0;
    let maxK1 = 0;
    let maxK2 = 0;
    for (let k1 = 1; p1 ** k1 <= nMax; k1++) {
        for (let k2 = 1; p2 ** k2 <= nMax / (p1 ** k1); k2++) {
            const product = p1 ** k1 * p2 ** k2;
            if (product > maxNumber) {
                maxNumber = product;
                maxK1 = k1;
                maxK2 = k2;
            }
        }
    }
    return [maxNumber, maxK1, maxK2];
}

module.exports = highestBiPrimeFac;

