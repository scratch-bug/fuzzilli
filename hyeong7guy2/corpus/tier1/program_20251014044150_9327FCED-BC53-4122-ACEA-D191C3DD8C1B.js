function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return F0;
            }
            function f16(a17) {
                const v20 = new ArrayBuffer(16);
                const v22 = new BigUint64Array(v20);
                return v22;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return -1;
    }
    f4(this, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0(F0, F0);
new F0(v25, v25);
new F0();
