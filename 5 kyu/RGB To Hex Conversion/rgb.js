function rgb (r, g, b) {
    return convertToHex(r)
        + convertToHex(g)
        + convertToHex(b);
}

function convertToHex(param) {
    if (param < 0) {
        param = 0;
    }
    if (param > 255) {
        param = 255;
    }
    const HEX = param.toString(16).toUpperCase();
    return HEX.length === 1 ? `0${HEX}` : HEX;
}

module.exports = rgb
