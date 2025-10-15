function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                a17.PlainDateTime;
                return a5;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v19 = new F9(-1, F0, -1, a6);
        v19.e = v19;
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v22 = new F0();
new F0(v22, v22);
