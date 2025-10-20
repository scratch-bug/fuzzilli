function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        a6 ?? a6;
        function f10(a11, a12, a13, a14) {
            return this;
        }
        f10();
        const v18 = String.prototype.startsWith;
        v18.apply("object", [v18]);
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v22 = new F1();
const v23 = new F1("object", v22);
new F1(F1, v23);
