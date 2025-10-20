function f1() {
    return 1.4798060562666745e+308;
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return f1;
    }
    Object.defineProperty(Float32Array, "valueOf", { configurable: true, enumerable: true, get: f9 });
    const t9 = Intl.PluralRules;
    const v13 = new t9("so");
    v13.select(Float32Array);
}
new F2(1.4798060562666745e+308, F2, f1, f1);
