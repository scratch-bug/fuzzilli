const v2 = [];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            -9007199254740990 >> a5;
            const t5 = v2.constructor;
            const v13 = t5();
            try { v13.forEach(-2.2250738585072014e-308); } catch (e) {}
            function f15(a16, a17) {
                return f15;
            }
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v18 = new F3();
v18.toString();
class C20 {
    static [v18](a22, a23, a24) {
    }
}
