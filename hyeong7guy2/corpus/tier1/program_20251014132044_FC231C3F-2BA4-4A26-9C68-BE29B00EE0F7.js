function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    Array.fromAsync(a2).then(Array, Array);
}
new F0(F0);
new Int32Array(268435440);
