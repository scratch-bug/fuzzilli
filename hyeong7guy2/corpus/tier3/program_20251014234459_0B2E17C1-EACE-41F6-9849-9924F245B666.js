function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = String.prototype.concat;
    try { v8.call(a3, a2, v8); } catch (e) {}
}
async function f10(a11, a12) {
    const v13 = new F0();
    await f10;
    return v13;
}
f10();
f10();
%OptimizeFunctionOnNextCall(f10);
