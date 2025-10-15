function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            Array.prototype.values.apply(F0, [f11,f11,f11]);
        }
        f11(f11);
        f11(F6);
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v20 = new F6();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
