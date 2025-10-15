class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C9 {
        }
        const v10 = new C9();
        function f11(a12) {
            this instanceof C0;
            return a12;
        }
        v10.constructor = f11;
        return v10.constructor();
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, F1);
new F1();
new F1();
