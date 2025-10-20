function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.Duration;
    const v6 = new v5();
    try { v6.add(v5, 68); } catch (e) {}
}
function f8(a9) {
    return a9;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
new Uint16Array(f2);
