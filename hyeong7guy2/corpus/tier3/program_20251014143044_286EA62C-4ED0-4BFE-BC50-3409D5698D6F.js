const v1 = new SharedArrayBuffer(SharedArrayBuffer);
function f2(a3) {
    return v1;
}
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2(f2);
