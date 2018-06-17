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

let step = (params) => {
    const rand = Math.random();
    if (rand <= params.makeMoney) {
        params.fund += 500;
    }
    else if (rand <= params.loseMoney) {
        params.fund -= 500;
    }
    if (params.days % 30 === 0) {
        params.fund -= params.rent;
    }
    if (params.days % 365 === 0) {
        params.rent += params.rent * params.inflation;
        params.getFunded += .01;
    }
    if (Math.random <= params.getFunded) {
        params.fund += 100000;
    };
};

export {
    getMean,
    getSD,
    step
};