function f1(a2) {
    return "10";
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.toString = f1;
        function f10() {
            return Intl;
        }
        const v12 = { construct: f10 };
        const v13 = v12.construct(v12, v12);
        const v14 = v13.NumberFormat;
        function f15() {
            return a5;
        }
        Object.defineProperty(v14, "maximumSignificantDigits", { configurable: true, get: f15 });
        const v16 = v13.NumberFormat;
        v16.roundingIncrement = Temporal;
        v16(v13, v16);
    } catch(e18) {
    }
}
new F3("10");
