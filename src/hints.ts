import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import { rxCombinations, rxPermutations } from "rx-combinatorics";

type IFilter = (words: Observable<string>) => Observable<string>;

export function hints(letters: string, wordlength: number, filters: IFilter[] = []): Observable<string> {
    let o = Observable.of(letters.split(""))
        .mergeMap((i) => rxCombinations(i, wordlength))
        .mergeMap(rxPermutations)
        .map((word) => word.join(""))
    ;

    filters.forEach((filter) => o = filter(o));

    return o;
}