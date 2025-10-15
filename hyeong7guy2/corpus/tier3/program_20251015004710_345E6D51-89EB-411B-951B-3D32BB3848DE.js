function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5(a6) {
    function f7() {
        return f7;
    }
    let v8;
    try { v8 = f7.bind(v4); } catch (e) {}
    v8();
    return v4;
}
f5(v4);
%PrepareFunctionForOptimization(f5);
%OptimizeFunctionOnNextCall(f5);
f5();
