function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a12;
            }
            function f16(a17) {
                const v19 = (typeof a2)[5];
                v19.substring(v19);
                return v19;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a7, a6, f4, F0);
        return F0;
    }
    f4(F0, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
const t23 = v23.constructor;
const v25 = new t23();
const v26 = v23.constructor;
new v26(F0, v23, v25, v26);
