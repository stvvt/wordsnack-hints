function *combinations(arr, n) {
    if (n <= 0) {
        return yield [];
    }
    if (arr.length <= n) {
        return yield arr;
    }

    yield *combinations(arr.slice(1), n);
    for (const c of combinations(arr.slice(1), n-1)) {
        yield [arr[0]].concat(c);
    }
}

module.exports = combinations;