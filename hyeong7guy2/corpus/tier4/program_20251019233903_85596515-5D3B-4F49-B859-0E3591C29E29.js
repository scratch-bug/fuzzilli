function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v11 = new Int8Array(3120);
        v11[221] ||= 5;
        return v11;
    }
    f5(a4, F1, F1);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, 5);
const v14 = new F1();
new F1(v14, F1);
