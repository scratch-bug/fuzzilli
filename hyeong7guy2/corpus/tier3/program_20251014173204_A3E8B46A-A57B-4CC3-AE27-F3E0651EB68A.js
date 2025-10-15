const v0 = [0.03209370648446275,-5.832267695949707];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        [...v0,a8];
        return a4;
    }
    f5(f5, F1, F1);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, F1);
new F1();
new F1();
