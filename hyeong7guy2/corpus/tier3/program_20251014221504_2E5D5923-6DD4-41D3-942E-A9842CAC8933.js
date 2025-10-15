function f0(a1, a2) {
    const v7 = new ArrayBuffer(127, { maxByteLength: 127 });
    const v9 = new Uint16Array(v7);
    v9[23];
    v9[53] = v9;
    return 127;
}
f0(f0, f0());
%OptimizeFunctionOnNextCall(f0);
f0();
