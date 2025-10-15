function f0(a1) {
    return a1;
}
const v3 = new Uint8ClampedArray();
Object.defineProperty(v3, Symbol.toPrimitive, { writable: true, enumerable: true, value: f0 });
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = Uint8ClampedArray;
}
const v10 = new F6(Symbol, F6);
const v11 = v10.d;
function f12() {
    return F6;
}
function f13(a14) {
    return f13;
}
Object.defineProperty(v11, 0, { configurable: true, get: f12, set: f13 });
