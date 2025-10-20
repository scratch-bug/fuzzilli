function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        return Promise.resolve(a4).finally(a6, 8);
    }
    f5.call();
    %OptimizeFunctionOnNextCall(f5);
}
const v13 = new F1();
const t9 = v13.constructor;
new t9();
new F1();
