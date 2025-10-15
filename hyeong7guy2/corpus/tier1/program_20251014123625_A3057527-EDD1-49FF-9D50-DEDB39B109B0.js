function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
            }
            function f17(a18) {
                return a7;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10(a6, -1, a7, a8);
        return F1;
    }
    f5(424566.4755122594, f5.bind(f5, a4));
    %OptimizeFunctionOnNextCall(f5);
}
const v22 = new F1(F1, F1);
const v23 = new F1(424566.4755122594, v22);
const t21 = v23.constructor;
new t21(v22);
