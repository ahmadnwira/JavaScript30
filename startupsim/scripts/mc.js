import { getMean, getSD } from './herlpers';


export class MCMode {
    constructor() {
        this.result = document.querySelector('.result');
        this.worker = new Worker('./scripts/mcWorker.js');
        this.worker.onmessage = function (e) {
            const mean = getMean(e.data);
            const SD = getSD(e.data, mean).toFixed(3);
            this.result.innerHTML =
                `will last for (${(mean-(1.96*SD)).toFixed(0)}-${(mean+(1.96*SD)).toFixed(0)})/days 95% of the time`;
        }.bind(this)
    }

    run(e) {
        this.worker.postMessage({
            'inflation': e.target.querySelector('#inflation').value / 100,
            'rent': Number(e.target.querySelector('#rent').value),
            'fund': Number(e.target.querySelector('#fund').value),
            'trials': Number(e.target.querySelector('#trials').value),
            'makeMoney': .05,
            'loseMoney': .33,
            getFunded: .01,
            days: 0
        });
        this.result.innerHTML = "calculating";
    }
}