class C1 {
}
C1.nanoseconds = 65535;
function f3() {
    return f3;
}
function f4() {
    function f5(a6) {
        const t8 = Temporal.PlainTime;
        const v9 = new t8();
        v9.add(C1);
        return f5;
    }
    return f5;
}
function f11(a12) {
    return f11;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f11 });
try { new Uint16Array(f3); } catch (e) {}
