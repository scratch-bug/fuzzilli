function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = `string${536870912n}undefined`;
            try { Symbol.apply(v9, v9); } catch (e) {}
            return v9;
        }
        f7(f7());
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2(Symbol, Symbol);
v13.toString();
