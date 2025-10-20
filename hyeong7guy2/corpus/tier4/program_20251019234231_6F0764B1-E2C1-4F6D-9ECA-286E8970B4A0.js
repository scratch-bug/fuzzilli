function f0(a1, a2) {
    const v4 = new SharedArrayBuffer();
    const v6 = new DataView(v4);
    try { v6.getFloat16(v6, v4, f0, f0, f0); } catch (e) {}
    let v8;
    try { v8 = a1(); } catch (e) {}
    return v8;
}
const v9 = f0(f0);
%OptimizeFunctionOnNextCall(f0);
f0(v9, v9);
