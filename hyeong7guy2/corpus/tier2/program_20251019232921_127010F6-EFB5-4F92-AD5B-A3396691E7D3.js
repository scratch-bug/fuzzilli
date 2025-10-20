function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return F0;
            }
            function f16(a17) {
                d = f16;
                return a6;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return F0;
    }
    f4(this, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0(F0, F0);
new F0(F0, v21);
function f23() {
    return f23;
}
const v24 = class extends f23 {
}
new F0(f23, v24);
