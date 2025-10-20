function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5(a6) {
    function f7() {
        return f7;
    }
    const t7 = f7.bind(F1, "c", a6);
    new t7(F1, f5);
    return a6;
}
const v10 = f5("c");
%PrepareFunctionForOptimization(f5);
%OptimizeFunctionOnNextCall(f5);
f5(v10);
