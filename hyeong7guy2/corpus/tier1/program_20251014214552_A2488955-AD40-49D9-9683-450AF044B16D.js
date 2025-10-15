const v1 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v10 = -9007199254740990 >> a4;
            const t5 = v1.constructor;
            const v12 = t5();
            try { v12.forEach(-2.2250738585072014e-308); } catch (e) {}
            try { v12(); } catch (e) {}
            return v10;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
