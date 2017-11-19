module.exports = function *permutations(arr) {
    if (arr.length <= 1) {
        return yield arr;
    }
    for (const p of permutations(arr.slice(1))) {
        for (let i = 0; i < arr.length; i++) {
            // yield p.slice(0, i).concat([arr[0]]).concat(p.slice(i));
            const q = p.slice(0);
            q.splice(i, 0, arr[0]);
            yield q;
        }
    }
}
