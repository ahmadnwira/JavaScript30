import { step } from './herlpers';

export class GameMode {
    constructor() {
        this.f = document.querySelector('#displayFund');
        this.d = document.querySelector('#displayDays');
    }

    gameStep(params) {
        params.days++;
        step(params);
        if (params.fund <= 0) clearInterval(this.gameIterval);
        this.f.innerHTML = `Fund: ${params.fund}`;
        this.d.innerHTML = `Day: ${params.days}`;
    }

    run(e) {
        params = {
            'inflation': e.target.querySelector('#inflation').value / 100,
            'rent': Number(e.target.querySelector('#rent').value),
            'fund': Number(e.target.querySelector('#fund').value),
            'trials': Number(e.target.querySelector('#trials').value),
            'makeMoney': .05,
            'loseMoney': .33,
            getFunded: .01,
            days: 0
        };

        gameIterval = setInterval(() => {
            this.gameStep(this.params)
        }, 100);
    }
}