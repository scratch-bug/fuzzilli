function f1() {
    return f1;
}
Object.defineProperty(Symbol, "toString", { configurable: true, enumerable: true, get: f1 });
function f2() {
    return f1;
}
function f3(a4) {
    return f1;
}
Object.defineProperty(Symbol, "toString", { configurable: true, get: f2, set: f3 });
