function f1(a2, a3) {
    return 0.2736824945711198;
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        return f1;
    }
    function f13(a14) {
        return f1;
    }
    Object.defineProperty(Float32Array, Symbol.toPrimitive, { get: f12, set: f13 });
    const t12 = Intl.PluralRules;
    const v19 = new t12("so");
    v19.select(Float32Array);
}
new F4();
