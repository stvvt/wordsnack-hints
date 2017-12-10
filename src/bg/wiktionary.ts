import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/bufferCount";
import rxjsFetch = require("rxjs-fetch");

export function filter(words: Observable<string>): Observable<string> {
    const baseUrl = "https://bg.wiktionary.org/w/api.php?origin=*&format=json&action=query&titles=";
    const fetchOptions: RequestInit = {
        mode: "cors",
        method: "GET",
        headers: [
            ["Accept", "application/json"]
        ]
    };

    return words
        .bufferCount(50)
        .map((wordsChunk) => wordsChunk.join("|"))
        .map((titles) => baseUrl + encodeURIComponent(titles))
        .mergeMap((url) => {
            return rxjsFetch(url, fetchOptions);
        })
        .mergeMap((response) => response.json())
        .map((json) => (json as any).query.pages)
        .mergeMap((pages) => {
            return Observable.from(
                Object.keys(pages)
                    .map((key) => pages[key])
                    .filter((page) => typeof page.missing === "undefined")
                    .map((page) => page.title)
            );
        })
    ;
}
