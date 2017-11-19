const permutations = require('./permutation');
const combinations = require('./combinations');
const eligible = require('./bg/sounds');

function* candates(letters, wordlength) {
    for (const c of combinations(letters.split(''), wordlength)) {
        for (const p of permutations(c)) {
            if (eligible(p)) {
                yield p.join('');
            }
        }
    }
}

module.exports = candates