const v2 = new Float32Array(2799);
function f4(a5, a6) {
    v2[a6 | a6] -= 512;
    return a6;
}
const v8 = f4();
%PrepareFunctionForOptimization(f4);
%OptimizeMaglevOnNextCall(f4);
f4(v2, v8);
