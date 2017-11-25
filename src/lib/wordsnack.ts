import "universal-fetch";

import candidates from "./candidates";
import chunk from "./chunk";

function filterRealWords(words: IterableIterator<string>, cb: (word: string | null) => void) {
    const maxWordsInQuery = 50;

    for (const g of chunk(words, maxWordsInQuery)) {
        const search = g.join("|");
        const url = "https://bg.wiktionary.org/w/api.php?origin=*&format=json&action=query&titles="
            + encodeURIComponent(search);
        const fetchOptions: RequestInit = {
            mode: "cors",
            method: "GET",
            headers: [
                ["Accept", "application/json"]
            ]
        };

        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((json) => {
                const obj = json.query.pages;
                Object.keys(obj)
                    .filter((key) => typeof obj[key].missing === "undefined")
                    .forEach((key) => cb(obj[key].title));
                cb(null);
            });
    }
}

export function hints(letters: string, wordlength: number, callback: (word: string | null) => void) {
    filterRealWords(candidates(letters, wordlength), callback);
}
