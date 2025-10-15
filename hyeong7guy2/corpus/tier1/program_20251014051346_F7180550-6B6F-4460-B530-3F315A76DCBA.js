function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Symbol.toPrimitive;
    const v6 = Object(v4);
    function f7() {
        return v4;
    }
    function f8(a9) {
        return a9;
    }
    Object.defineProperty(v6, Symbol, { configurable: true, get: f7, set: f8 });
}
const v10 = new F0();
const t13 = v10.constructor;
new t13();
