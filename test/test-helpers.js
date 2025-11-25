module.exports.roundToTwo = function (num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
};

module.exports.roundToOne = function (num) {
    return Math.round((num + Number.EPSILON) * 10) / 10;
};