const snail = arr =>
    arr.length > 1
        ? [
            ...arr.shift(),
            ...arr.map(e => e.pop()),
            ...arr.pop().reverse(),
            ...arr.reverse().map(e => e.shift())
        ].concat(arr.length ? snail(arr.reverse()) : [])
        : arr[0];

module.exports = snail;