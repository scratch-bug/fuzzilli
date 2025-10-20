function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1("c", F1);
function f6(a7) {
    function f8() {
        return F1;
    }
    let v9;
    try { v9 = f8.bind(v5, "c", a7); } catch (e) {}
    v9(a7, a7, v9);
    v9();
    return v9;
}
f6();
%PrepareFunctionForOptimization(f6);
%OptimizeFunctionOnNextCall(f6);
f6(f6);
