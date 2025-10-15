const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a12.values();
        }
        try { F9.apply(a8, f5, a3, a3); } catch (e) {}
        new F9(a8, v0);
        return F9;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v19 = new F1(v0, F1);
const v20 = v19.constructor;
new v20(v20, v20, v20, v20);
new v20();
