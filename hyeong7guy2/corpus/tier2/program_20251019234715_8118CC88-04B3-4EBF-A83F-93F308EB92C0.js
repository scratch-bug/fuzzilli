const v1 = 4 !== 4;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            (f7 < {}) != a4;
        }
        f7(F2);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v14 = new F2(v1);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
