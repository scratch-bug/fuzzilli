const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10, a11) {
                const t6 = a10?.constructor;
                new t6(a10);
                return a10;
            }
            try { f8(); } catch (e) {}
            f8(v0, v0);
        }
        f6();
        f6(this);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1(F1, v0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
