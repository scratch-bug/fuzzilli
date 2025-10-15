function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return this;
            }
            function f16(a17) {
                let v19 = 2674;
                v19++;
                255 % v19;
                return a6;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v22 = new F9(F9, a2, this, a5);
        return v22;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
new F0();
new F0(F0, v24);
