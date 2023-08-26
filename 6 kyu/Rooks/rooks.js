function rooks(n, k) {
    if (factorial(k) > 10e14) {
        return 0n
    }
    const factN = factorial(n);
    const factK = factorial(k);
    const factNK = factorial(n-k);
    const c = factN / (factNK * factK);
    return c * c * factK;
}

function factorial(num) {
    if (num <= 0n || num === 1n) {
        return 1n;
    }
    return num * factorial(num - 1n);
}

module.exports = rooks;