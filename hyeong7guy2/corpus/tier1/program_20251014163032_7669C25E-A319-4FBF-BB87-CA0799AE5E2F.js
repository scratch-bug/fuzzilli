function f0(a1, a2, a3, a4) {
    ([a1,a1]).forEach(a3);
    return a4;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            let v14;
            try { v14 = f0(a9, f11, a13, f0); } catch (e) {}
            return v14;
        }
        f12();
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v17 = new F7(F7, f0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
