import {
    step
} from './herlpers';

export class GameMode {
    constructor() {
        this.f = document.querySelector('#displayFund');
        this.d = document.querySelector('#displayDays');

        this.params = {
            isSet: false
        };

        this.addFeature = this.addFeature.bind(this);
        this.pivot = this.addFeature.bind(this);
        this.ico = this.addFeature.bind(this);
    }

    gameStep(params) {
        params.days++;
        step(params);
        if (params.fund <= 0) clearInterval(this.gameIterval);
        this.f.innerHTML = `Fund: ${params.fund}`;
        this.d.innerHTML = `Day: ${params.days}`;
    }

    run(e) {
        this.params = {
            inflation: e.target.querySelector('#inflation').value / 100,
            rent: Number(e.target.querySelector('#rent').value),
            fund: Number(e.target.querySelector('#fund').value),
            trials: Number(e.target.querySelector('#trials').value),
            makeMoney: .05,
            loseMoney: .33,
            getFunded: .01,
            days: 0
        };
        this.gameIterval = setInterval(() => {
            this.gameStep(this.params)
        }, 400);
    }

    addFeature() {
        if (this.params.isSet || this.params.isSet === undefined) {
            if (Math.random() <= .3) {
                this.params.makeMoney += .01;
            }
            this.params.fund -= 10000;
            console.log(this.params.makeMoney);
        }
    }

    pivot() {
        if (this.params.isSet || this.params.isSet === undefined) {
            if (Math.random() <= .5) {
                this.params.makeMoney += .05;
            }
            this.params.fund -= 10000;
            console.log(this.params.makeMoney);
        }
    }

    ico() {
        if (this.params.isSet || this.params.isSet === undefined) {
            if (Math.random() <= .01) {
                this.params.fund += 500000;
                this.params.loseMoney -= .2;
                this.params.makeMoney += .1;
            }
            this.params.fund -= 10000;
            console.log(this.params.makeMoney);
            console.log(this.params.loseMoney);
        }
    }
}