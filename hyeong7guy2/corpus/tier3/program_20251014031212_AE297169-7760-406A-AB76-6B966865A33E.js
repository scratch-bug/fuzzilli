function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
([F0,F0,F0,F0]).fill.apply(F0);
function f7(a8, a9) {
    function f10(a11) {
        return a11;
    }
    f10 <<= f10;
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F12(F12, f10); } catch (e) {}
    return F12;
}
f7();
%PrepareFunctionForOptimization(f7);
%OptimizeMaglevOnNextCall(f7);
f7();
