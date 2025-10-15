class C3 {
}
function f4(a5) {
    const v6 = a5?.__defineSetter__;
    let v7;
    try { v7 = new v6(v6, f4, C3, a5); } catch (e) {}
    return v7;
}
f4(C3);
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4("129");
while (0) {
}
