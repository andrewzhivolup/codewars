const findSequences = (n) => {
    const result = [];
    if (n <= 1) return result;

    for (let start = 1; start < n; start++) {
        const mini = [];
        let sum = 0;
        for (let current = start; current < n; current++) {
            sum += current;

            if (sum <= n) {
                mini.push(current);
            } else {
                sum -= current;
                break;
            }
        }
        if (sum === n) {
            result.push(mini)
        }
    }
    return result.sort((a, b) => a.length - b.length);
}

module.exports = findSequences

