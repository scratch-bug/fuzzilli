const v3 = new Int8Array(331);
function f4(a5, a6) {
    v3[a6 | a6] = 10;
    return a6;
}
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeMaglevOnNextCall(f4);
f4(331, Int8Array);
