const topThreeWords = (text) => {
    const words = text.toLowerCase().replace(/\s+/g, ' ').replace(/[^а-яА-Яa-zA-Z' ]/g, "").trim().split(" ");
    let res = {}
    words.forEach(element => {
        !res[element] ? res[element] = 1 : res[element] += 1;
    });

    const result = [];
    let iteration = Object.keys(res).length
    if (iteration > 2) iteration = 3
    for (let index = 0; index < iteration; index++) {
        const element = Object.entries(res).reduce((acc, curr) => acc[1] >= curr[1] ? acc : curr)[0]
        result.push(element);
        delete res[element];
    }
    if (result[0] === '' || result[0] === '\'') return []
    return result
}

module.exports = topThreeWords;