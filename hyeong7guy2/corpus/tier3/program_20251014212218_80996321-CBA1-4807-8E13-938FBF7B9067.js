function f1(a2, a3) {
    const v8 = new SharedArrayBuffer(7, { maxByteLength: 1073741824 });
    const v10 = new DataView(v8);
    try { v10.getUint8(2376); } catch (e) {}
    try { a2(); } catch (e) {}
    return v8;
}
f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1(f1, f1);
