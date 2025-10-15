class C0 {
}
let v1;
try { v1 = C0.toString(); } catch (e) {}
function f2(a3, a4) {
    a4 | a4;
    try { arguments[v1](); } catch (e) {}
    return C0;
}
const v8 = f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2(v8, C0);
