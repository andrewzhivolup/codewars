const romanDecoder = (roman) => {
    roman = roman.split('');
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        (symbol[roman[i]] < symbol[roman[i + 1]]) ? result -= symbol[roman[i]] : result += symbol[roman[i]]
    }
    return result
}

const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

module.exports = romanDecoder;