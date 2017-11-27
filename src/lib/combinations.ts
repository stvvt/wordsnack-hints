function unique<T>(arr: T[]): Iterable<T> {
    return arr.reduce((acc, item) => {
        acc.set(item, true);
        return acc;
    }, new Map<T, boolean>()).keys();
}

export default function* combinations<T>(arr: T[], n: number): Iterable<T[]> {
    if (n >= arr.length || n <= 1) {
        if (n === arr.length) {
            yield arr;
        } else if (n === 1) {
            for (const item of unique(arr)) {
                yield [item];
            }
        }
        return;
    }

    const [first, ...rest] = arr;

    yield* combinations(rest, n);

    const dups = rest.indexOf(first) >= 0;

    for (const c of combinations(rest, n - 1)) {
        if (!dups || c.indexOf(first) >= 0) {
            yield [first, ...c];
        }
    }
}
