function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze(Array);
}
new F0();
new F0();
