function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a13;
            }
            function f16(a17) {
                function f18(a19, a20, a21, a22) {
                    return a11;
                }
                f18(a6, f4, a13, f15);
                return f18;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
            new BigUint64Array(1073741825);
        }
        new F9(this, F0, a7, this);
        return a7;
    }
    f4(F0, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v29 = new F0();
new F0(F0, v29);
new F0();
