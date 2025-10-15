function f2() {
    return 5;
}
WeakSet.toString = f2;
function f4() {
    return f2;
}
function f5() {
    const v7 = Temporal.Duration;
    v7.years = WeakSet;
    const v8 = new v7(5, 5);
    v8.add(v7);
    return v8;
}
function f10(a11) {
    return f2;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f10 });
try { new Uint16Array(f4); } catch (e) {}
