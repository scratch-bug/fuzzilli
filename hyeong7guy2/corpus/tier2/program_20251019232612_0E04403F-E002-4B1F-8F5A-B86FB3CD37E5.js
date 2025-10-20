function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a13;
            }
            function f16(a17) {
                for (let i19 = -65536, i20 = 10; i19 < i20; i20--) {
                }
                return a4;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
        }
        const v27 = new F9();
        v27.e = v27;
        return F1;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, F1);
new F1();
new F1();
