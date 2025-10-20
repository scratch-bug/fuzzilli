function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            f6[4] | 7;
            const v12 = { a: 1.1 };
            Infinity = -57992n;
            v12[Symbol] = 7;
            return a7;
        }
        f6.apply();
        f6(-57992n);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1(-57992n, -57992n);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
