function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol.iterator.toString(a2, a6);
    }
    new F4(F4, F0, this, a3);
    %OptimizeFunctionOnNextCall(F0);
}
const v14 = new F0();
new F0();
new F0(v14, F0);
