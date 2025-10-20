const v1 = ("RNs").matchAll("RNs");
function f2(a3, a4) {
    let v5;
    try { v5 = a3(); } catch (e) {}
    function f6(a7) {
        return f2;
    }
    v1[v5] = f6;
    return f2;
}
const v8 = f2(f2);
%OptimizeFunctionOnNextCall(f2);
f2(v8, v8);
