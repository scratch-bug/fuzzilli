class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            (-8 / !-8) + C0;
            for (let i21 = 0, i22 = 10; i22; i22--) {
            }
        }
        new F9(F1, C0, F1, f5);
        return F9;
    }
    f5(F1, C0, a3);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, F1);
new F1();
new F1();
