function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.PlainTime;
        const v7 = new v6(a4, a4);
        v7.subtract();
        return v6;
    }
    return f3;
}
function f9(a10) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
