const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v0;
                this.b = Int16Array;
                function F20() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v23 = Temporal.PlainMonthDay;
                    try { v23(); } catch (e) {}
                }
                new F20();
            }
            new F16(a7, a14);
        }
        new F9(a8, a7, a6, a8);
        return a6;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v29 = new F1();
const v30 = new F1(F1, v29);
new F1(v30, v0);
