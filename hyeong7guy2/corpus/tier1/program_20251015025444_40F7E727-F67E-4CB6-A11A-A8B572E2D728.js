const v1 = [];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            for (const v9 of v1) {
            }
            const t7 = v1.constructor;
            const v11 = t7();
            try { v11.forEach(-2.2250738585072014e-308); } catch (e) {}
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2(v1, F2);
v13.toString();
class C15 {
    static [v13](a17, a18, a19) {
    }
}
