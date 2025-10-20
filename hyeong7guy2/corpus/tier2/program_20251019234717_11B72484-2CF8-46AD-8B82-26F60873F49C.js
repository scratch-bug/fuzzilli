function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            for (let v12 = 0; v12 < 5; v12++) {
                v12 * f5;
                v11.a;
            }
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
