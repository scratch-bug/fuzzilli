function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const v5 = a4 | a4;
    function f6(a7, a8, a9) {
        a7 >> a7;
        return a8;
    }
    const v11 = new f6(F0);
    try { v11(v5, a3, v11); } catch (e) {}
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2(F0, F0);
