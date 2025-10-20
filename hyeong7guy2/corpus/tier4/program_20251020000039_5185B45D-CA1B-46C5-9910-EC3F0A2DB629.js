const v1 = [-3.4043613284289596e+307,-2.220446049250313e-16,2.2250738585072014e-308];
function f2(a3) {
    return v1;
}
function f4(a5) {
    a5.forEach = Float64Array;
    return v1.map(f2);
}
f4(v1);
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4(f2);
