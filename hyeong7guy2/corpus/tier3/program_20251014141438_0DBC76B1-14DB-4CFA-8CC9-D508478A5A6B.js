function f0(a1, a2) {
    const v5 = { maxByteLength: 127 };
    for (let v6 = 0; v6 < 5; v6++) {
    }
    const v8 = new ArrayBuffer(127, v5);
    const v10 = new Uint16Array(v8);
    v10[53] = v10;
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
