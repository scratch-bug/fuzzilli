function f0() {
    return f0;
}
function f2() {
    return Symbol;
}
function f3() {
    const v5 = Temporal.Duration;
    v5.nanoseconds = f0;
    const v6 = new v5();
    return v6.add(v5);
}
function f8(a9) {
    return f3;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
try { new Uint16Array(f2); } catch (e) {}
