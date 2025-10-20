const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        Promise.race(v1);
        return a4;
    }
    f6.call();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(Set, Set);
new F2();
new F2();
