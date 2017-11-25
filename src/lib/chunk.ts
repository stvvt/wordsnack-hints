export default function *chunk<T>(generator: IterableIterator<T>, size: number): IterableIterator<T[]> {
    let groupItems = [];
    for (const i of generator) {
        groupItems.push(i);
        if (groupItems.length === size) {
            yield groupItems;
            groupItems = [];
        }
    }

    if (groupItems.length > 0) {
        yield groupItems;
    }
}
