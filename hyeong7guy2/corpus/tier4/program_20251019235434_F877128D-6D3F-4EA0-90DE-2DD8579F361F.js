const v1 = new BigInt64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        return Number.isInteger(v1);
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v13 = new F2(v1, BigInt64Array);
new F2(v1, v1);
new F2(v1, v13);
