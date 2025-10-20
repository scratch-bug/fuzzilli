function f1(a2, a3) {
    function f4(a5, a6) {
        return a5;
    }
    +f4 ^ -54591;
    return Symbol;
}
Symbol.toString = f1;
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15() {
        function f16(a17) {
            const v18 = `string${536870912n}undefined`;
            const v19 = Symbol.toString();
            try { v19(Symbol, f15, v19, v18); } catch (e) {}
            return 536870912n;
        }
        f16();
        f16();
        %OptimizeMaglevOnNextCall(f16);
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f15 });
}
const v23 = new F11(536870912n, f1);
v23.toString();
