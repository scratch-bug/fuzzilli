const v0 = {};
function f1(a2, a3) {
    const v6 = new SharedArrayBuffer(7);
    const v8 = new DataView(v6);
    v8.setFloat16(v0);
    try { a2(); } catch (e) {}
    return SharedArrayBuffer;
}
f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
