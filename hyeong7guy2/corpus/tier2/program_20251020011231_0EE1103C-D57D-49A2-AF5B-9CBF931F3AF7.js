function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
            }
            function f17(a18) {
                function f19(a20, a21, a22) {
                    function F24(a26, a27) {
                        if (!new.target) { throw 'must be called with new'; }
                        String.prototype.concat.apply("function", []);
                    }
                    new F24();
                }
                f19();
                f19();
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10();
        return NaN;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v39 = new F1(NaN, F1);
new F1(v39, F1);
