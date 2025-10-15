function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze([a2,a2]);
}
new F0();
new F0();
