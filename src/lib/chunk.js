function *chunk(generator, size) {
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

module.exports = chunk;