export default function* permutations<T>(arr: T[]): IterableIterator<T[]> {
    if (arr.length <= 1) {
        return yield arr;
    }
    for (const p of permutations(arr.slice(1))) {
        for (let i = 0; i < arr.length; i++) {
            const q = p.slice(0);
            q.splice(i, 0, arr[0]);
            yield q;
        }
    }
}
