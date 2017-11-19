const vowels = 'аеиоуюя';
const cosonants = 'бвгджзйклмнпрстфхцчшщъь';

function isCosonant(ch) {
    return cosonants.indexOf(ch) >= 0;
}

function isVowel(ch) {
    return vowels.indexOf(ch) >= 0;
}

module.exports = function (str) {
    let v = 0, c = 0;

    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            v++;
            c = 0;
        } else if (isCosonant(str[i])) {
            c++;
            v = 0;
        }

        if (v > 2 || c > 3) {
            return false;
        }
    }

    return true;
}