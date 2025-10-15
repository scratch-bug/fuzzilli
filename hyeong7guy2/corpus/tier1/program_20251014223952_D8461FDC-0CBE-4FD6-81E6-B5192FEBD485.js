function f0(a1, a2, a3, a4) {
    const v5 = a3 << a3;
    v5 + v5;
    return f0;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            f0(a9, f11, a13);
        }
        f12();
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v17 = new F7();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
