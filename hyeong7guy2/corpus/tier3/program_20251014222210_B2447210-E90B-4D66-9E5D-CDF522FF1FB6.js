let v0 = 1073741825;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        const v7 = {};
        v0++;
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            eval(a11);
        }
        return a4;
    }
    f5(f5(F1));
    %OptimizeMaglevOnNextCall(f5);
    f5();
}
new F1(F1, v0);
