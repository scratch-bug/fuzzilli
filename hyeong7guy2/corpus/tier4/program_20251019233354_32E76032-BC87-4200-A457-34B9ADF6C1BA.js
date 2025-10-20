function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5(a6) {
    function f7() {
        return f7;
    }
    const v8 = f7.bind(F1, "c", a6);
    v8(a6, f5, f5, v8);
    return a6;
}
f5();
f5();
%OptimizeFunctionOnNextCall(f5);
f5();
