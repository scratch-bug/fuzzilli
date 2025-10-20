const v0 = [4.0,0.745893865518333,0.3535908171260467,2.677032107609324e+307];
function f2() {
    return v0;
}
WeakSet.toString = f2;
function f4() {
    return f2;
}
function f5() {
    const v7 = Temporal.Duration;
    v7.years = WeakSet;
    const v8 = new v7();
    v8.add(v7);
    return f4;
}
function f10(a11) {
    return f5;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f10 });
try { new Uint16Array(f4); } catch (e) {}
