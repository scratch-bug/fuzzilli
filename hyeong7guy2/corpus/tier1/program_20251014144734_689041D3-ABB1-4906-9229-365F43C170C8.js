function f1() {
    return f1;
}
function f2() {
    Math.atan2(Infinity, Infinity);
}
function f6(a7) {
    return a7;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f6 });
new Uint16Array(f1);
