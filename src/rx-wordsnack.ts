import { Observable } from "rxjs";
import rxjsFetch = require("rxjs-fetch");
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";
import isEligible from "./bg/sounds";

import { rxCombinations, rxPermutations } from "rx-combinatorics";

function filterWithWiktionary(word: string): Observable<string> {\

}

export function hints(letters: string, wordlength: number): Observable<string> {
    return Observable.of(letters.split(""))
        .mergeMap((i) => rxCombinations(i, wordlength))
        .mergeMap(rxPermutations)
        .map((word) => word.join())
        .filter(isEligible)
        .mergeMap(filterWithWiktionary);
    // filterRealWords(candidates(letters, wordlength), callback);
}
