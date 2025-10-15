function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            try { Array(2.2250738585072014e-308); } catch (e) {}
        }
        f6();
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1(F1, 2.2250738585072014e-308);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
