const v3 = new Float32Array(2799);
function f5(a6, a7) {
    v3[a7 | a7] -= 512;
    return 1n;
}
f5(2799, v3);
const v10 = f5(1n, f5);
%OptimizeFunctionOnNextCall(f5);
f5(Float32Array, v10);
