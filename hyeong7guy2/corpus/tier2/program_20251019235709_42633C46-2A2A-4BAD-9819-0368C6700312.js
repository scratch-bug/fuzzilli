function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                return f5;
            }
            for (let i11 = 0; i11 < 100000; i11++) {
                f7(i11, i11);
            }
            ([this])[4] | 7;
            arguments[2];
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
