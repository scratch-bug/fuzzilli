function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4 + a4;
}
const v7 = new F1(0, F1);
const v8 = [-3.4043613284289596e+307,-2.220446049250313e-16,2.2250738585072014e-308];
function f9(a10) {
    try { a10.reduceRight(F1); } catch (e) {}
    return v7;
}
f9(v8);
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
