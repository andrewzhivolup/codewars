const narcissistic = (value) => {
    let res = 0;
    array = value.toString().split('');
    array.forEach(element => {
        res += element ** array.length;
    });
    return res === value ? true : false;
}

module.exports = narcissistic;

