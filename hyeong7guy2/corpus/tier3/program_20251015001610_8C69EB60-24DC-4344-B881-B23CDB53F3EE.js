const v0 = {};
function f1(a2, a3) {
    const v6 = new SharedArrayBuffer(7);
    const v8 = new DataView(v6);
    const v9 = v8.setFloat16(v0, DataView);
    try { a2(v9); } catch (e) {}
    return DataView;
}
const v11 = f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1(v11, v11);
