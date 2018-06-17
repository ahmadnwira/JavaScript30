
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


let mcStep = params => {
    while (params.fund > 0) {
        step(params);
        params.days++;
    }
    return params.days;
};

self.onmessage = e => {
    const params = {
        fund: e.data['fund'],
        makeMoney: e.data['makeMoney'],
        loseMoney: e.data['loseMoney'],
        getFunded: .05,
        rent: e.data['rent'],
        inflation: e.data['inflation'],
        days: e.data['days']
    };

    const trials = e.data['trials'];

    let exp = [];
    for (let i = 0; i <= trials; i++) {
        exp.push(mcStep({...params}));
    }

    self.postMessage(exp);
}