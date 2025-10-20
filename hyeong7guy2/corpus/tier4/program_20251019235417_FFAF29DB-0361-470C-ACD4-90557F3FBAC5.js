function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends WeakMap {
            }
            const v16 = new C15();
            v16.set(f5);
        }
        new F9(a3, F1, F9, WeakMap);
        return F9;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F1();
new F1(F1, v20);
new F1();
