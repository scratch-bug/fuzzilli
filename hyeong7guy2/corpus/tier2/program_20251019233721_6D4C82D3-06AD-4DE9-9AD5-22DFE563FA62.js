function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        const v7 = Intl.NumberFormat;
        const v10 = { style: "currency" };
        v10.currency = "NFC";
        v7("fo", v10).resolvedOptions();
        return v10;
    }
    return f4;
}
function f13(a14) {
    return a14;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f13 });
try { new Uint16Array(f2); } catch (e) {}
