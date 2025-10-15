function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        this[Symbol.isConcatSpreadable];
        return a7;
    }
    f4(F0, a2, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0();
new F0(F0, F0);
new F0(F0, v12);
