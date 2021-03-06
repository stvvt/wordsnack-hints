import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import { combinations, permutations } from "rx-combinatorics";

type IFilter = (words: Observable<string>) => Observable<string>;

function hintsFn(letters: string, wordlength: number, filters: IFilter[] = []): Observable<string> {
    let o = Observable.of(letters.split(""))
        .mergeMap((i) => combinations.observable(i, wordlength))
        .mergeMap(permutations.observable)
        .map((word) => word.join(""))
    ;

    filters.forEach((filter) => o = filter(o));

    return o;
}

interface IHints {
    (letters: string, wordlength: number, filters: IFilter[]): Observable<string>;
    count(letters: string, wordlength: number): number;
}

export const hints = hintsFn as IHints;

hints.count = (letters: string, wordlength: number) => {
    const arr = letters.split("");

    return combinations.count(arr, wordlength, true);
};
