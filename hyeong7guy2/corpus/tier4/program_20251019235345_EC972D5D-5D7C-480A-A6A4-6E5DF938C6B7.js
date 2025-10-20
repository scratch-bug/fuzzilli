function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v11 = String.prototype.startsWith;
        v11.apply("object", [v11]);
        return a4;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v15 = new F1();
const v16 = new F1(F1, v15);
new F1(F1, v16);
