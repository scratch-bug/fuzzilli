function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Object(Symbol.toPrimitive);
    function f7() {
        return a2;
    }
    function f8(a9) {
        return F0;
    }
    Object.defineProperty(v6, Symbol.toPrimitive, { configurable: true, get: f7, set: f8 });
}
new F0(F0);
