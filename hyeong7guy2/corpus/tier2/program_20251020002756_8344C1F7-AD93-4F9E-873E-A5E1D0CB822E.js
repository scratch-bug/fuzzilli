function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = -Object;
            v9 | 2.2250738585072014e-308;
            +v9;
        }
        f6(f6(F0));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
