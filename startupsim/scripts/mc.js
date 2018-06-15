self.onmessage = function (e) {
    let makeMoney = e.data['makeMoney']; /* 5% probality of making 1k/day */
    let loseMoney = e.data['loseMoney']; /* 30% probality of losing 1k/day */

    let getFunded = .05; /* probality of getting funded increases every year by 1%*/
    const trials = 100;

    let startup = (seedFund, inflation, rent) => {
        let days = 0;
        seedFund -= rent;
        while (seedFund > 0) {
            const rand = Math.random();
            if (rand <= makeMoney) {
                seedFund += 500;
            }
            if (rand <= loseMoney) {
                seedFund -= 500;
            }
            if (days % 30 === 0) {
                seedFund = seedFund - rent;
            }
            if (days % 365 === 0) {
                rent += rent * inflation;
                getFunded += .01;
            }
            if (Math.random <= getFunded) {
                seedFund += 100000;
            }
            days++;
        }
        return days;
    }

    let sim = (trials, seedFund, inflation, rent) => {
        let exp = [];
        for (let i = 0; i <= trials; i++) {
            exp.push(startup(seedFund, inflation, rent));
        }
        return exp;
    };

    const res = sim(trials, e.data['seed'], e.data['inflation'], e.data['rent']);

    self.postMessage(res);
}