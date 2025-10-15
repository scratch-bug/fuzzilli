function f0(a1, a2, a3) {
    const v6 = new Uint8ClampedArray(16);
    v6[1] = v6;
    return f0;
}
const v7 = f0();
const v8 = v7(v7, v7, f0);
%OptimizeMaglevOnNextCall(f0);
f0(v8, v7, v7);
