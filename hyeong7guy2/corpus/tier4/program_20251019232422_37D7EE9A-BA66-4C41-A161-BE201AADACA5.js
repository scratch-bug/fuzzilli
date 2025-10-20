const v0 = [3.0];
function f1(a2) {
    return a2;
}
function f3(a4) {
    v0.map(f1);
    return f3;
}
f3(f1);
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3(v0);
