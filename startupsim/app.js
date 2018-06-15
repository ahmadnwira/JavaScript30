const form = document.querySelector('form');
const result = document.querySelector('.result');

const worker = new Worker('./scripts/mc.js');

form.addEventListener('submit', e => {
    e.preventDefault();

    worker.postMessage({
        'inflation': e.target.querySelector('#inflation').value / 100,
        'rent': Number(e.target.querySelector('#rent').value),
        'seed': Number(e.target.querySelector('#seed').value),
        'makeMoney': Number(.05),
        'loseMoney': Number(.33),
    });

    result.innerHTML = "How Long Will Your Company Stay in Business?";
});

worker.onmessage = function (e) {
    const mean = getMean(e.data);
    const SD = getSD(e.data, mean).toFixed(3);

    result.innerHTML = `your bussines will last for ${Math.round(mean)} day with SD ${SD}`;
}