function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, gc, { configurable: true, get: gc });
}
const v4 = new F0();
new F0(v4);
