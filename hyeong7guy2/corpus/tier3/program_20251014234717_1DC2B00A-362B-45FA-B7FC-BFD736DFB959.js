function f0(a1, a2) {
    const v7 = new ArrayBuffer(127, { maxByteLength: 127 });
    const v9 = new Uint16Array(v7);
    const v10 = v9[23];
    v10 | v10;
    v9[53] = v9;
    return v10;
}
const v12 = f0();
const v13 = f0(v12, f0);
%OptimizeFunctionOnNextCall(f0);
f0(v13, v12);
