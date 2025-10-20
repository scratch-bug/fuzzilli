const v0 = /(?<=)o/uyg;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[4] | 7;
            const v11 = f6 <= v0;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { F12.apply(v0, v10); } catch (e) {}
            return v11;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1(F1, F1);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
