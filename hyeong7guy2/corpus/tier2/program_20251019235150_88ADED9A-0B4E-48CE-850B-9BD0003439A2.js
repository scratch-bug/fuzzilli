function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = (512).localeCompare;
            const v9 = -v8;
            function f10(a11, a12, a13, a14) {
                return f6;
            }
            f10(v8, 512, v9, f6, 512);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
