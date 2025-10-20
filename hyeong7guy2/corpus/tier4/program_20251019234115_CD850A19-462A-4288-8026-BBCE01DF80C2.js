function f0() {
    return f0;
}
const v2 = WebAssembly.Suspending;
const v3 = new v2(f0);
function f4() {
    try { v2(v3); } catch (e) {}
    return f0;
}
f4.call(f4, f4, f0, v3);
f4();
%OptimizeFunctionOnNextCall(f4);
f4();
