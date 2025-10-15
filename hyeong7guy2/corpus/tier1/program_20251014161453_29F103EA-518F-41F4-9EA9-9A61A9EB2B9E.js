function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.Duration;
    v5.nanoseconds = 9;
    const v6 = new v5();
    v6.add(v5);
}
function f8(a9) {
    return f3;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
new Uint16Array(f2);
