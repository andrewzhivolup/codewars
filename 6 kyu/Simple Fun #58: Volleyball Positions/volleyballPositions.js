const volleyballPositions = (formation, k) => {
    for (let i = 0; i < k % 6; ++i)
        [
            formation[3][0],
            formation[1][0],
            formation[0][1],
            formation[1][2],
            formation[3][2],
            formation[2][1]
        ] =
            [
                formation[1][0],
                formation[0][1],
                formation[1][2],
                formation[3][2],
                formation[2][1],
                formation[3][0]
            ];
    return formation;
}

module.exports = volleyballPositions;
