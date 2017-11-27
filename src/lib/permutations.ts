function insert<T>(item: T, pos: number, arr: T[]): T[] {
    const result = arr.slice();
    result.splice(pos, 0, item);
    return result;
}

export function* slide<T>(item: T, arr: T[]): Iterable<T[]> {
    const seen = false;

    for (let i = 0; i <= arr.length; i++) {
        yield insert(item, i, arr);
        if (item === arr[i]) {
            return;
        }
    }
}

export default function* permutations<T>(arr: T[]): IterableIterator<T[]> {
    if (arr.length <= 1) {
        return yield arr;
    }

    const [first, ...rest] = arr;

    for (const p of permutations(rest)) {
        yield *slide(first, p);
    }
}
