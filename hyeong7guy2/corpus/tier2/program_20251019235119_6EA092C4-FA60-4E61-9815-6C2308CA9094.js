function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            v7 | 7;
            const v10 = { a: v7 };
            function f11(a12) {
                return f11;
            }
            const v13 = class extends f11 {
            }
            try { v13(); } catch (e) {}
            const v15 = v10.a;
            v15 << v15;
        }
        f5();
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0(F0, F0);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
