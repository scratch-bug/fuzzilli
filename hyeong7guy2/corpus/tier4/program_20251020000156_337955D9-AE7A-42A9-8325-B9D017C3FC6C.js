class C0 {
}
function f1(a2, a3) {
    const v4 = a3 | a3;
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a8.at;
    }
    const v11 = new F6(f1);
    const t9 = v11.constructor;
    const v13 = new t9(v4);
    const t11 = v13.constructor;
    new t11(C0);
    new F6("2147483647");
    return a3;
}
const v17 = f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(v17, C0);
