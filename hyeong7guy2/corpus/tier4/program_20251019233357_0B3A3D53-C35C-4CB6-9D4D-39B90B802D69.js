function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5(a6) {
    function f7() {
        return F1;
    }
    const t7 = f7.bind(F1, "c", a6);
    new t7();
    return f5;
}
const v10 = f5.call();
f5("c");
%OptimizeFunctionOnNextCall(f5);
f5(v10);
