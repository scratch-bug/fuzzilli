function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return a2;
    }
    function f5(a6) {
        return a6;
    }
    Object.defineProperty(this, Symbol.toPrimitive, { configurable: true, get: f4, set: f5 });
    function f9() {
        return F0;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v10 = new F0(F0, F0);
function f11(a12, a13) {
    return f11;
}
Object.defineProperty(v10, Symbol.toPrimitive, { enumerable: true, value: f11 });
