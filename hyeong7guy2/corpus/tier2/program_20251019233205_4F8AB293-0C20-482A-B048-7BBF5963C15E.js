function f0(a1, a2) {
    return Object["isFrozen"]();
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        return f0;
    }
    function f15(a16) {
        return a16;
    }
    Object.defineProperty(Float32Array, Symbol.toPrimitive, { get: f14, set: f15 });
    const t12 = Intl.PluralRules;
    const v21 = new t12("so");
    v21.select(Float32Array);
}
new F6(F6, F6, F6, f0);
