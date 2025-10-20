function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return F0;
            }
            function f16(a17) {
                function F18(a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v24 = 0; v24 < 5; v24++) {
                }
                Math.expm1(F18);
                return a5;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = this;
        }
        new F9(a7, F0, a2, a7);
        return F0;
    }
    f4(a3, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0();
const v29 = v28.constructor;
new v29(F0, v29, v28, v29, v29);
new F0();
