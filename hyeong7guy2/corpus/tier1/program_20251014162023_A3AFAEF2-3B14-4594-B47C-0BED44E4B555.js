function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a13;
            }
            function f17(a18) {
                return F1;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        new F10(a8, -1, f5, a4, -1, a3, f0, F1);
        return a6;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(f0, f0);
new F1();
new F1();
