function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v17 = new F13();
            const v18 = v17.constructor;
            const v19 = v18.length;
            v19 ^ v19;
            --a12;
            F0 < v18;
        }
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
    f10();
}
const v25 = new F6(F6, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
