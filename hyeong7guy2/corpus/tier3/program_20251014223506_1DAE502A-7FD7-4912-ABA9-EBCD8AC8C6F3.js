function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    a4 | a4;
    function f6(a7, a8, a9) {
        for (let v10 = 0; v10 < 5; v10++) {
            v10 - v10;
            Symbol instanceof F0;
        }
        return F0;
    }
    try { new f6(); } catch (e) {}
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
