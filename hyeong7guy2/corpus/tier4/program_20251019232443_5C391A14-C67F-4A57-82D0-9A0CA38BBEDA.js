function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
function f2(a3, a4) {
    a4 | a4;
    function f6(a7, a8, a9) {
        Symbol instanceof F0;
        return a9;
    }
    const v12 = new f6(a4, f6, a4);
    let v13;
    try { v13 = v12(); } catch (e) {}
    return v13;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
