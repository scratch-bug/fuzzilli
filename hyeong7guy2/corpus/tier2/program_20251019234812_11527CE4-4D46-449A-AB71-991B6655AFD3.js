function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Uint32Array.length;
            -v8;
            function f10(a11, a12, a13, a14) {
                return a11 === a11;
            }
            f10();
            f10(v8);
        }
        f5();
        f5(F0);
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
