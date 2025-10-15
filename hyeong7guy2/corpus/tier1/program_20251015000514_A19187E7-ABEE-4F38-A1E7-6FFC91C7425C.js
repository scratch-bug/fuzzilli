function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            f15.name;
            function f17(a18) {
                Temporal.PlainTime;
                Temporal.PlainTime;
                return this;
            }
            Object.defineProperty(this, "e", { get: f15, set: f17 });
            this.e = -1;
        }
        const v22 = new F9();
        v22.e = v22;
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0();
new F0(F0, v24);
const v26 = new F0();
new F0(v26, v24);
