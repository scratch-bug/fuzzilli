const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        let v9 = 0;
        while (v9 < 2) {
            v9++;
            function f13(a14, a15) {
                return f5;
            }
            try { f13(v0); } catch (e) {}
            Temporal.PlainMonthDay;
        }
        return v9;
    }
    f5(v0, F1, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, v0);
new F1(v0, v0);
new F1();
