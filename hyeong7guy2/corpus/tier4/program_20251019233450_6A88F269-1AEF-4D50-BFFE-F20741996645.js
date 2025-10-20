let v0 = -1814329209;
function f1(a2, a3) {
    ++v0;
    const v5 = %WasmArray();
    if (!v0) {
    }
}
const v6 = f1(f1, f1);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(v6, f1);
