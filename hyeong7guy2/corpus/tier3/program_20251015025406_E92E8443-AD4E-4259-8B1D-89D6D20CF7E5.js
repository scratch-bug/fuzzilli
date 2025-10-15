let v0 = 1073741825;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        v0++;
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            eval();
        }
        return this;
    }
    f5();
    f5(F1);
    %OptimizeMaglevOnNextCall(f5);
    f5();
}
new F1(F1, v0);
