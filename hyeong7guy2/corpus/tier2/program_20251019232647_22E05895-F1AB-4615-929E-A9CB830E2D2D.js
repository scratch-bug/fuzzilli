function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a2;
            }
            function f16(a17) {
                const v19 = typeof undefined;
                v19 === v19;
                return F0;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a2, a2, a5, a6);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
