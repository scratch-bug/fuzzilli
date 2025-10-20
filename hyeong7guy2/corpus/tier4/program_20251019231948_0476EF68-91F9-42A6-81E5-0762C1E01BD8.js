function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new Float32Array(Float32Array, F0, Float32Array);
function f6(a7, a8) {
    v5[a8 | a8] -= F0;
    return a7;
}
f6(Float32Array, f6);
f6();
%OptimizeFunctionOnNextCall(f6);
f6();
