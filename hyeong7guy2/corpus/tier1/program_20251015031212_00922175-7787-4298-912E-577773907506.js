function f0(a1, a2, a3, a4) {
    new a1(a3, a4);
    return f0;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { a9.call(a8); } catch (e) {}
    function f11() {
        function f12(a13) {
            f0(a8, f11, a13, f0);
        }
        f12(a8);
        f12(f12);
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v17 = new F6(F6);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
