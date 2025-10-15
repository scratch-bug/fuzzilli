function f0(a1, a2, a3, a4) {
    const v5 = a3 << a3;
    ([v5,v5]).forEach(a3);
    return a3;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            try { f0(a10, f12, a14); } catch (e) {}
            return a14;
        }
        f13();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v18 = new F8();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
