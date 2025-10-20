function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    function f5(a6, a7, a8) {
        try { a6(F0, a8); } catch (e) {}
        return f2;
    }
    f5();
    Math.asin(F0);
    f5(F0);
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
