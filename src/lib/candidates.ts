import permutations from "./permutations";
import combinations from "./combinations";
import eligible from "./bg/sounds";

export default function* candidates(letters: string, wordlength: number): IterableIterator<string> {
    for (const c of combinations(letters.split(""), wordlength)) {
        for (const p of permutations(c)) {
            if (eligible(p)) {
                yield p.join("");
            }
        }
    }
}
