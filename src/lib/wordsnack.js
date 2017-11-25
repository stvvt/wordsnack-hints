require('universal-fetch');

const candidates = require('./candidates');
const chunk = require('./chunk');

function filterRealWords(candidates, cb) {
    const maxWordsInQuery = 50;

    for (const g of chunk(candidates, maxWordsInQuery)) {
        const search = g.join('|');
        const url = "https://bg.wiktionary.org/w/api.php?origin=*&format=json&action=query&titles=" + encodeURIComponent(search)
        const fetchOptions = {
            mode: 'cors',
            // credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        };

        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then(function (json) {
                const obj = json.query.pages
                Object.keys(obj)
                    .filter(key => typeof obj[key].missing === 'undefined')
                    .forEach(key => cb(obj[key].title));
                cb(null);
            });
    }
}

module.exports = global.wordsnack = function wordsnack(letters, wordlength, callback) {
    filterRealWords(candidates(letters, wordlength), callback);
};
