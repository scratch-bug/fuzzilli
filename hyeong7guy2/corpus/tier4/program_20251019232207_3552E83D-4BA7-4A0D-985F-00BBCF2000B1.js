function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
function f9() {
    [Symbol];
    const v11 = [];
    let v12;
    try { v12 = v11.findLast(v6); } catch (e) {}
    const v13 = v11.some(f9);
    const v14 = Date();
    try { v14.matchAll(f9, v11, f9, v13, v13); } catch (e) {}
    return v12;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
