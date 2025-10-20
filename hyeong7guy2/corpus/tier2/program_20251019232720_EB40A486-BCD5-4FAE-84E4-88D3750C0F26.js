function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = -439501.18159386097 >>> ({}).a;
            function f11(a12, a13, a14, a15) {
                return F0;
            }
            const v16 = f11.name;
            v10 !== v10;
            return v16;
        }
        f5();
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
