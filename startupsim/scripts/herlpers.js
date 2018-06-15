let getMean = data => {
    const sum = data.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    return sum / data.length
};

let getSD = (data, mean) => {
    const sq = data.reduce((sum, value) => {
        return sum += Math.pow((value - mean), 2);
    }, 0);

    const variance = sq / (data.length);

    return Math.sqrt(variance);
}