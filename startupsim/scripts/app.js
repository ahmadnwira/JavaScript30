import {GameMode} from './game';
import {MCMode} from './mc';

const game = new GameMode();
const mc = new MCMode();

const form = document.querySelector('.paramters');

form.addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('[type="checkbox"]').checked ? game.run(e) : mc.run(e);
});

document.querySelector('#feature').addEventListener('click', game.addFeature);
document.querySelector('#pivot').addEventListener('click', game.pivot);
document.querySelector('#ico').addEventListener('click', game.ico);