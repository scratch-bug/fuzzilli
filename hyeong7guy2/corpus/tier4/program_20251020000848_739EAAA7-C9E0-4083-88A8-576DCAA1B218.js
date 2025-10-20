function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    a4 | a4;
    function f6(a7, a8, a9) {
        try { a7(); } catch (e) {}
        return f2;
    }
    let v12 = -26551;
    v12--;
    Math.asin(F0);
    v12 >> v12;
    const v16 = new f6(F0);
    return v16;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
