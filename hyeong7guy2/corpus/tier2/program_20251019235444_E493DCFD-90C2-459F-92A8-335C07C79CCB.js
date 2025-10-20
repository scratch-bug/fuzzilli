let v0 = 1797391423;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                ++v0;
                return a6;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = a12;
        }
        new F9(a4, v0);
    }
    f5(v0, a3, f5);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, v0);
new F1();
new F1();
