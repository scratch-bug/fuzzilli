function f1() {
    return f1;
}
function f2() {
    Math.atan2(-128, Infinity);
}
function f7(a8) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f7 });
new Uint16Array(f1);
