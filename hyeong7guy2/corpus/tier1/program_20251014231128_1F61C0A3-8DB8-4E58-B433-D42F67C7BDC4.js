function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = Object(BigUint64Array.toString());
    function f10() {
        return f10;
    }
    function f11(a12) {
        return Object;
    }
    Object.defineProperty(v9, "valueOf", { configurable: true, enumerable: true, get: f10, set: f11 });
}
const v13 = new F0();
new F0(v13, v13, F0, F0);
