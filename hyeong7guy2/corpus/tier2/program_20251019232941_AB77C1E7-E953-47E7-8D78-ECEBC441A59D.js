function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = f7[4];
            function f10(a11) {
                return typeof f6;
            }
            f10(Uint8ClampedArray, 11);
            v9 | 7;
        }
        f7();
        f7(this);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v18 = new F2();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
