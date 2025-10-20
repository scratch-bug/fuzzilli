function f3(a4, a5) {
    const v6 = a5 * a5;
    v6 << v6;
    return Symbol;
}
f3(WeakMap, BigUint64Array);
Symbol.toString = f3;
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            const v17 = `string${536870912n}undefined`;
            Symbol.toString();
            v17.replace(v17, a16);
            return f14;
        }
        f15();
        f15(a12);
        %OptimizeMaglevOnNextCall(f15);
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f14 });
}
const v22 = new F10();
v22.toString();
