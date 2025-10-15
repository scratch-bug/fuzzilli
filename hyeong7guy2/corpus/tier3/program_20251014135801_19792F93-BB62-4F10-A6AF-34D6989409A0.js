const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        v1.delete();
        return a5;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
