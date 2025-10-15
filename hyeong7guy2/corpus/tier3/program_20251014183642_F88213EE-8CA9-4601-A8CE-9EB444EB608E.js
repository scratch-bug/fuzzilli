function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        return String.prototype.concat.apply("function", []);
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v15 = new F1("function", F1);
const v16 = new F1();
const v17 = v16.constructor;
new v17(v17, v17, v17, v15);
