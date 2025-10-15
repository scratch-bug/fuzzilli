function f0() {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        a7[Symbol.toPrimitive] = f0;
        ([a3]).at(a7);
        return F1;
    }
    f5(a3, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v14 = new F1(f0, f0);
new F1(F1, v14);
new F1();
