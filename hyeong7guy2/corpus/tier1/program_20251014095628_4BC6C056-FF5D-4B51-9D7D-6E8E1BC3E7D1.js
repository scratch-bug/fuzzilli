function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return F0;
            }
            function f16(a17) {
                a17.PlainDateTime = a17;
                return a17.PlainDateTime;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v19 = new F9(f4, F0, F0, a6);
        v19.e = v19;
        return F0;
    }
    f4(a2, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0();
new F0();
new F0(v21, F0);
