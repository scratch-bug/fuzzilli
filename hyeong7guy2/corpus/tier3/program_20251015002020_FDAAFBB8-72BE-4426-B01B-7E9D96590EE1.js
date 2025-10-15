const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        -9007199254740990 >> a3;
        const t4 = v0.constructor;
        return t4().forEach(f5);
    }
    f5();
    f5();
    %OptimizeMaglevOnNextCall(f5);
    f5();
}
new F1();
