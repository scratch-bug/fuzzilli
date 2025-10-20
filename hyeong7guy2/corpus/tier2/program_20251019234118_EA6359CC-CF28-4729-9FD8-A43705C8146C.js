function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        const v6 = Intl.NumberFormat;
        v6("fo", { style: "currency" });
        return v6;
    }
    return f3;
}
function f11(a12) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
try { new Uint16Array(f1); } catch (e) {}
