const v2 = Array(353);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        return v2[0] + 1;
    }
    f7(F3, f7, 353);
    %OptimizeFunctionOnNextCall(f7);
}
const v15 = new F3(353, F3);
new F3(v15, 353);
new F3(Array, 353);
