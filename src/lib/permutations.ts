export default function* permutations<T>(arr: T[]): IterableIterator<T[]> {
    if (arr.length <= 1) {
        // tslint:disable-next-line:no-console
        console.log("--- yield", arr);
        return yield arr;
    }
    for (const p of permutations(arr.slice(1))) {
        for (let i = 0; i <= arr.length; i++) {
            // if (arr[0] !== p[i]) {
                const q = p.slice(0); // clone
                q.splice(i, 0, arr[0]);
                // tslint:disable-next-line:no-console
                console.log("-- yield", p, q);
                yield q;
            // }
        }
    }
}
