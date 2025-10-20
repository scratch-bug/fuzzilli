function f3() {
    return f3;
}
function f4() {
    function f5(a6) {
        const v8 = Intl.NumberFormat;
        const v11 = { style: "currency" };
        v11.currency = "NFC";
        v8("fo", v11).formatRangeToParts(-9007199254740992, -9007199254740992);
        return "currency";
    }
    return f5;
}
function f14(a15) {
    return f3;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f14 });
try { new Uint16Array(f3); } catch (e) {}
