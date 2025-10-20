function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Set();
    const v5 = Symbol.iterator;
    v3[v5] = v5;
}
new F0();
