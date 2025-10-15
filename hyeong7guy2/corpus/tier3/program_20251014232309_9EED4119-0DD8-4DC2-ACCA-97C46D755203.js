const v0 = [-3.4043613284289596e+307,-2.220446049250313e-16,2.2250738585072014e-308];
function f1(a2) {
    return a2;
}
function f3(a4) {
    return v0.map(f1);
}
f3(f1);
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
