export default function *buffer<T>(generator: Iterable<T>, size: number): Iterable<T[]> {
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
