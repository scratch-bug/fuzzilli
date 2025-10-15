function f0() {
    return f0;
}
function f2() {
    return Uint32Array;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(Uint32Array, 476, { configurable: true, get: f2, set: f3 });
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, 476, { configurable: true, value: f0 });
}
new F5(Uint32Array);
