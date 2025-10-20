function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                Array.prototype.entries();
                return a17;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = 255;
        }
        new F9(a6, 255, a7, a8);
        return a4;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v23 = new F1();
const t21 = v23.constructor;
new t21(F1);
new F1();
