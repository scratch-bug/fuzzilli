function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v13 = Symbol.for(a11);
            function f14() {
                7.179323612959793e+307 == gc();
                class C19 extends v13 {
                }
                return f10;
            }
            try { f14(); } catch (e) {}
        }
        f10();
        f10(F5);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v23 = new F5(F5, WeakSet);
class C24 {
    static [F0] = WeakSet;
    static [v23](a26, a27, a28) {
    }
}
