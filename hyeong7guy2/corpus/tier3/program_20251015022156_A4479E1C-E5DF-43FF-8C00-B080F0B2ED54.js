function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    a4 | a4;
    function f6(a7, a8, a9) {
        return Symbol instanceof F0;
    }
    const v12 = new f6(f6, F0, f2);
    try { v12(); } catch (e) {}
    return a3;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
