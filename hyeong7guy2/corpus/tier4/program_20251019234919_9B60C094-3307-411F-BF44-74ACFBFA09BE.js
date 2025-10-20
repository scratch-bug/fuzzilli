const v0 = [-3.4043613284289596e+307,-2.220446049250313e-16,2.2250738585072014e-308];
function f1(a2) {
    const v4 = -4294967297n * -4294967297n;
    let v5 = v4 * v4;
    return v5--;
}
function f7(a8) {
    return v0.map(f1);
}
f7(v0);
%PrepareFunctionForOptimization(f7);
%OptimizeFunctionOnNextCall(f7);
f7(f1);
