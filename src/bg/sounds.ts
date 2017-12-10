import { Observable } from "rxjs/Observable";
const vowels = "аеиоуюя";
const cosonants = "бвгджзйклмнпрстфхцчшщъь";

function isCosonant(ch: string) {
    return cosonants.indexOf(ch) >= 0;
}

function isVowel(ch: string) {
    return vowels.indexOf(ch) >= 0;
}

function isEligible(str: string | string[]): boolean {
    let v = 0;
    let c = 0;

    for (const ch of str) {
        if (isVowel(ch)) {
            v++;
            c = 0;
        } else if (isCosonant(ch)) {
            c++;
            v = 0;
        }

        if (v > 2 || c > 3) {
            return false;
        }
    }

    return true;
}

export function filter(words: Observable<string>): Observable<string> {
    return words.filter(isEligible);
}
