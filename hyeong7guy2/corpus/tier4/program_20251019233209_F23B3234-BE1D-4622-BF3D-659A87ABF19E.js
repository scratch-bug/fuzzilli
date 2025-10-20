function f0() {
    return f0;
}
const v1 = [-3.4043613284289596e+307,-2.220446049250313e-16,2.2250738585072014e-308];
v1.constructor = f0;
function f2(a3) {
    return v1;
}
function f4(a5) {
    return v1.forEach(f2);
}
f4(f4);
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4();
