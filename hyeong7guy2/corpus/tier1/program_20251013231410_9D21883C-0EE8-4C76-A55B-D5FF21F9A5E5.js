function f1() {
    return f1;
}
function f2(a3) {
    return f2;
}
Object.defineProperty(BigUint64Array, 1000, { configurable: true, enumerable: true, get: f1, set: f2 });
