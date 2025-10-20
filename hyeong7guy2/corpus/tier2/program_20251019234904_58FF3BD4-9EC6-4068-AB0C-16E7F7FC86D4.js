let v0 = 1797391423;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a15;
            }
            function f17(a18) {
                function f19(a20, a21, a22) {
                    const v23 = { [a14]: a18 };
                    ++v0;
                    return v23;
                }
                return f19();
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10(a4, v0, a7, F10);
        return F1;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v28 = new F1();
new F1(v28, F1);
new F1();
