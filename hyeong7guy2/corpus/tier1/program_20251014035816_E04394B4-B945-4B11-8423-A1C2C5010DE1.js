function f1() {
    return f1;
}
function f2(a3) {
    return f2;
}
Object.defineProperty(Date, Symbol.isConcatSpreadable, { configurable: true, enumerable: true, get: f1, set: f2 });
Object.defineProperty(Date, Symbol.isConcatSpreadable, { writable: true, configurable: true, value: Date });
